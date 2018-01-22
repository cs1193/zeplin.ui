/* @flow */

export default class CardEditorComponentController {
  static NAME: string = 'CardEditorComponentController';

  /* @ngInject */
  constructor($log, $scope, $stateParams) {
    this.$log = $log;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
  }
}
