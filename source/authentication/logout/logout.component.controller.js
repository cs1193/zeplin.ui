/* @flow */

import EndpointService from '../endpoint.service';
import AuthenticationService from '../authentication.service';

export default class LogoutComponentController {
  static NAME: string = 'LogoutComponentController';

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

  logout() {
    this.isLoading = true;
    if (this.AuthenticationService.isAuthenticated()) {
      this.EndpointService.logout().then((response) => {
        if (response) {
          this.AuthenticationService.removeAccessToken();
          this.$location.url('/login');
        }
        this.isLoading = false;
      }, (error) => {
        this.$log.log(error);
      });
    } else {
      this.AuthenticationService.redirectToLogin();
    }
  }
}
