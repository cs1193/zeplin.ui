/* @flow */

export default class ColumnEditorComponentController {
  static NAME: string = 'ColumnEditorComponentController';

  /* @ngInject */
  constructor($log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
  }

  cancel() {
    this.modalInstance.dismiss('cancel');
  }
}
