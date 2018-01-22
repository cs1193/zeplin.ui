/* @flow */

import BoardService from '../board.service';

export default class BoardNameCheckDirective {
  static NAME: string = 'boardNameCheck';

  /* @ngInject */
  constructor($log, BoardService) {
    this.$log = $log;
    this.BoardService = BoardService;
  }

  static factory() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link(scope, element, attributes, controller) {
        controller.$asyncValidators.checkBoardNameExists = (modelValue, viewValue) => {
          this.BoardService.getBoardByName(modelValue)
            .then((data) => {
              this.$log.log(data);
            }, (error) => {
              this.$log.log(error);
            });
        };
      },
    };
  }
}
