/* @flow */

import EndpointService from '../endpoint.service';
import AuthenticationService from '../authentication.service';

export default class RegisterComponentController {
  static NAME: string = 'RegisterComponentController';

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

  register() {
    this.isLoading = true;
    this.EndpointService.register(
      this.registerForm.name,
      this.registerForm.email,
      this.registerForm.password,
    ).then((response) => {
      if (response && response.status === 'success') {
        this.isLoading = false;
        this.successMessage = response.message;
        this.$timeout(() => {
          this.$location.url('/login');
        }, 3000);
      } else {
        this.isLoading = false;
        this.errorMessage = response.message;
        this.$log.log(response.error);
      }
    }, (error) => {
      this.$log.log(error);
    });
  }
}
