/* @flow */

export default class TaskItemComponentController {
  static NAME: string = 'TaskItemComponentController';

  /* @ngInject */
  constructor($log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
  }
}
