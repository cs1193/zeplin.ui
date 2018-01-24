/* @flow */

import BoardService from '../board.service';

export default class BoardNameCheckDirective {
  static NAME: string = 'boardNameCheck';

  /* @ngInject */
  static factory($q, BoardService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link(scope, element, attributes, controller) {
        controller.$asyncValidators.checkBoardNameExists = (modelValue, viewValue) => {
          const deferred = $q.defer();
          BoardService.getBoardByName(modelValue)
            .then((data) => {
              controller.$setValidity('boardNameExists', true);
              if (data && (data.status === 'success' || (data.board && data.board.name === modelValue))) {
                controller.$setValidity('boardNameExists', false);
              }
              deferred.resolve(true);
            }, (error) => {
              controller.$setValidity('boardNameExists', false);
              deferred.reject();
            });
          return deferred.promise;
        };
      },
    };
  }
}
