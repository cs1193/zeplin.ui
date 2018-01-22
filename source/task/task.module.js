import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import TaskIndicatorComponent from './task-indicator/task-indicator.component';

export default angular.module('zeplin.ui.task', [
  angularUIBootstrap,
])
  .component(TaskIndicatorComponent.NAME, TaskIndicatorComponent)
  .name;
