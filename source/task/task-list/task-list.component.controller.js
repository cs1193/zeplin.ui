/* @flow */

export default class TaskListComponentController {
  static NAME: string = 'TaskListComponentController';

  /* @ngInject */
  constructor($log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
  }

  deleteTask(event) {
    this.onDelete({
      $event: {},
    });
  }

  updateTask(event) {
    this.onUpdate({
      $event: {},
    });
  }

  toggleTask(event) {
    this.onToggle({
      $event: {},
    });
  }
}
