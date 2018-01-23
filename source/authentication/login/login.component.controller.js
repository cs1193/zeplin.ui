/* @flow */

import EndpointService from '../endpoint.service';
import AuthenticationService from '../authentication.service';

export default class LoginComponentController {
  static NAME: string = 'LoginComponentController';

  /* @ngInject */
  constructor(
    $log,
    $location,
    $timeout,
    EndpointService,
    AuthenticationService,
  ) {
    this.$log = $log;
    this.$location = $location;
    this.$timeout = $timeout;
    this.EndpointService = EndpointService;
    this.AuthenticationService = AuthenticationService;
    this.isLoading = false;
  }

  login() {
    this.isLoading = true;
    this.EndpointService.login(
      this.loginForm.email,
      this.loginForm.password,
    ).then((response) => {
      if (response && response.status === 'success') {
        this.AuthenticationService.setAccessToken(response.token);
        this.$location.url('/');
      } else {
        this.errorMessage = response.message;
        this.$log.log(response);
      }
      this.isLoading = false;
    }, (error) => {
      this.errorMessage = 'Login Error';
      this.$log.log(error);
      this.isLoading = false;
    });
  }
}
