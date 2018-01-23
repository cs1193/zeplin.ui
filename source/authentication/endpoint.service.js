/* @flow */

import AuthenticationService from './authentication.service';

export default class EndpointService {
  static NAME: string = 'EndpointService';

  /* @ngInject */
  constructor(
    $q,
    $http,
    AuthenticationService,
    LOGIN_ENDPOINT,
    LOGOUT_ENDPOINT,
    REGISTER_ENDPOINT,
  ) {
    this.$q = $q;
    this.$http = $http;
    this.AuthenticationService = AuthenticationService;
    this.LOGIN_ENDPOINT = LOGIN_ENDPOINT;
    this.LOGOUT_ENDPOINT = LOGOUT_ENDPOINT;
    this.REGISTER_ENDPOINT = REGISTER_ENDPOINT;
  }

  login(email: string, password: string): Promise {
    let deferred = this.$q.defer();

    this.$http.post(this.LOGIN_ENDPOINT, {
      email,
      password,
    }).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  logout(): Promise {
    let deferred = this.$q.defer();

    this.$http.post(this.LOGOUT_ENDPOINT).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve();
      }
    }, (error) => {
      deferred.reject();
    });

    return deferred.promise;
  }

  register(name: string, email: string, password: string): Promise {
    let deferred = this.$q.defer();

    this.$http.post(this.REGISTER_ENDPOINT, {
      name,
      email,
      password,
    }).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject();
    });

    return deferred.promise;
  }
}
