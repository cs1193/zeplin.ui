/* @flow */

export default class TaskFormComponentController {
  static NAME: string = 'TaskFormComponentController';

  /* @ngInject */
  constructor($log, $scope) {
    this.$log = $log;
    this.$scope = $scope;
  }

  $onInit() {
    this.newTask = {};
    this.resetInput();
  }

  submitForm() {
    this.onSubmit({
      $event: {
        task: this.newTask,
      },
    });
    this.resetInput();
  }

  resetInput() {
    this.newTask = {};
  }
}
