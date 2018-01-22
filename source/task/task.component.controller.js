/* @flow */
import TaskService from './task.service';

export default class TaskComponentController {
  static NAME: string = 'TaskComponentController';

  /* @ngInject */
  constructor($log, $scope, TaskService) {
    this.$log = $log;
    this.$scope = $scope;
    this.TaskService = TaskService;
  }

  getTaskByCardId(id): Promise {
    const deferred = this.$q.defer();

    this.$http.get(`${this.TASK_ENDPOINT}/${id}`).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
