/* @flow */

import AuthenticationService from './authentication.service';

export default class AuthenticationHttpInterceptor {
  static NAME: string = 'AuthenticationHttpInterceptor';

  /* @ngInject */
  static factory(
    $rootScope: any,
    AuthenticationService: AuthenticationService,
  ): AuthenticationHttpInterceptor {
    return new AuthenticationHttpInterceptor($rootScope, AuthenticationService);
  }

  /* @ngInject */
  constructor($rootScope: any, AuthenticationService: AuthenticationService) {
    this.$rootScope = $rootScope;
    this.AuthenticationService = AuthenticationService;
  }

  request = (config: any) => {
    config.params = config.params || {};
    let accessToken = this.AuthenticationService.getAccessToken();

    if (accessToken) {
      config.headers['x-access-token'] = accessToken;
    }

    return config;
  }

  responseError = (response) => {
    if (response.status === 401) {
      this.AuthenticationService.redirectToLogin();
    }
    return response;
  }
}
