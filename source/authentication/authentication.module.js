/* @flow */
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import AuthenticationConfig from './authentication.config';

import LoginComponent from './login/login.component';
import LogoutComponent from './logout/logout.component';
import RegisterComponent from './register/register.component';

declare var LOGIN_ENDPOINT: string;
declare var REGISTER_ENDPOINT: string;

export default angular.module('zeplin.ui.authentication', [
  angularUIRouter,
])
  .constant('LOGIN_ENDPOINT', LOGIN_ENDPOINT)
  .constant('REGISTER_ENDPOINT', REGISTER_ENDPOINT)
  .component(LoginComponent.NAME, LoginComponent)
  .component(LogoutComponent.NAME, LogoutComponent)
  .component(RegisterComponent.NAME, RegisterComponent)
  .config(AuthenticationConfig)
  .name;
