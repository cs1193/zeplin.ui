/* @flow */

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';

import BoardModule from './board/board.module';
import CommonModule from './common/common.module';
import UtilitiesModule from './utilities/utilities.module';
import TaskModule from './task/task.module';

import IndexConfig from './index.config';

export default angular.module('zeplin.ui', [
  angularUIRouter,
  angularUIBootstrap,
  CommonModule,
  UtilitiesModule,
  BoardModule,
  TaskModule,
])
  .config(IndexConfig)
  .name;
