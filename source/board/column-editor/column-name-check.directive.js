/* @flow */

import BoardService from '../column.service';

export default class ColumnNameCheckDirective {
  static NAME: string = 'columnNameCheck';

  /* @ngInject */
  static factory($q, ColumnService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link(scope, element, attributes, controller) {
        controller.$asyncValidators.checkColumnNameExists = (modelValue, viewValue) => {
          const deferred = $q.defer();
          BoardService.getColumnByName(modelValue)
            .then((data) => {
              controller.$setValidity('columnNameExists', true);
              if (data && (data.status === 'success' || (data.column && data.column.name === modelValue))) {
                controller.$setValidity('columnNameExists', false);
              }
              deferred.resolve(true);
            }, (error) => {
              controller.$setValidity('columnNameExists', false);
              deferred.reject();
            });
          return deferred.promise;
        };
      },
    };
  }
}
