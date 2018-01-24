/* @flow */
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import 'ngstorage';

import AuthenticationConfig from './authentication.config';

import LoginComponent from './login/login.component';
import LoginComponentController from './login/login.component.controller';

import LogoutComponent from './logout/logout.component';
import LogoutComponentController from './logout/logout.component.controller';

import RegisterComponent from './register/register.component';
import RegisterComponentController from './register/register.component.controller';

import AuthenticationService from './authentication.service';
import EndpointService from './endpoint.service';

import AuthenticationHttpInterceptor from './authentication.httpinterceptor';

declare var LOGIN_ENDPOINT: string;
declare var LOGOUT_ENDPOINT: string;
declare var REGISTER_ENDPOINT: string;

export default angular.module('zeplin.ui.authentication', [
  angularUIRouter,
  'ngStorage',
])
  .constant('LOGIN_ENDPOINT', LOGIN_ENDPOINT)
  .constant('LOGOUT_ENDPOINT', LOGOUT_ENDPOINT)
  .constant('REGISTER_ENDPOINT', REGISTER_ENDPOINT)
  .component(LoginComponent.NAME, LoginComponent)
  .controller(LoginComponentController.NAME, LoginComponentController)
  .component(LogoutComponent.NAME, LogoutComponent)
  .controller(LoginComponentController.NAME, LoginComponentController)
  .component(RegisterComponent.NAME, RegisterComponent)
  .controller(RegisterComponentController.NAME, RegisterComponentController)
  .factory(AuthenticationHttpInterceptor.NAME, AuthenticationHttpInterceptor.factory)
  .service(AuthenticationService.NAME, AuthenticationService)
  .service(EndpointService.NAME, EndpointService)
  .config(AuthenticationConfig)
  .name;
