/* @flow */
/* @ngInject */

import LoginComponent from './login/login.component';
import RegisterComponent from './register/register.component';

export default function AuthenticationConfig($stateProvider) {
  const loginState: object = {
    state: 'login',
    stateDefinition: {
      url: '/login',
      component: LoginComponent.NAME,
    },
  };

  const registerState: object = {
    state: 'register',
    stateDefinition: {
      url: '/register',
      component: RegisterComponent.NAME,
    },
  };

  $stateProvider
    .state(loginState.state, loginState.stateDefinition)
    .state(registerState.state, registerState.stateDefinition);
}
