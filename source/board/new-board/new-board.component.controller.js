/* @flow */

export default class NewBoardComponentController {
  static NAME: string = 'NewBoardComponentController';

  /* @ngInject */
  constructor($log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
  }
}
