/* @flow */

import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import TaskIndicatorComponent from './task-indicator/task-indicator.component';

import TaskComponent from './task.component';
import TaskComponentController from './task.component.controller';

import TaskFormComponent from './task-form/task-form.component';
import TaskFormComponentController from './task-form/task-form.component.controller';

import TaskListComponent from './task-list/task-list.component';
import TaskListComponentController from './task-list/task-list.component.controller';

import TaskItemComponent from './task-item/task-item.component';
import TaskItemComponentController from './task-item/task-item.component.controller';

import TaskService from './task.service';

declare var TASK_ENDPOINT: string;

export default angular.module('zeplin.ui.task', [
  angularUIBootstrap,
])
  .constant('TASK_ENDPOINT', TASK_ENDPOINT)
  .component(TaskIndicatorComponent.NAME, TaskIndicatorComponent)
  .component(TaskComponent.NAME, TaskComponent)
  .controller(TaskComponentController.NAME, TaskComponentController)
  .component(TaskFormComponent.NAME, TaskFormComponent)
  .controller(TaskFormComponentController.NAME, TaskFormComponentController)
  .component(TaskListComponent.NAME, TaskListComponent)
  .controller(TaskListComponentController.NAME, TaskListComponentController)
  .component(TaskItemComponent.NAME, TaskItemComponent)
  .controller(TaskItemComponentController.NAME, TaskItemComponentController)
  .service(TaskService.NAME, TaskService)
  .name;
