/* @flow */
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import IndexModule from '../source/index.module';

import ExampleComponent from './example.component';
import ExampleComponentController from './example.component.controller';

declare var VERSION: string;
declare var PACKAGE_NAME: string;

export default angular.module('example', [
  angularUIRouter,
  IndexModule,
])
  .constant('VERSION', VERSION)
  .constant('PACKAGE_NAME', PACKAGE_NAME)
  .component(ExampleComponent.NAME, ExampleComponent)
  .controller(ExampleComponentController.NAME, ExampleComponentController)
  .name;
