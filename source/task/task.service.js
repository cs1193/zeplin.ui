/* @flow */

export default class TaskService {
  static NAME: string = 'TaskService';

  /* @ngInject */
  constructor($log, $q, $http, TASK_ENDPOINT) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.TASK_ENDPOINT = TASK_ENDPOINT;
  }
}
