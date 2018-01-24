/* @flow */

export default class AuthenticationService {
  static NAME: string = 'AuthenticationService';

  /* @ngInject */
  constructor($log, $window, $location, $localStorage) {
    this.$log = $log;
    this.$window = $window;
    this.$location = $location;
    this.$localStorage = $localStorage;
  }

  isAuthenticated(): boolean {
    let accessToken = this.getAccessToken();
    let expiration = this.getAccessTokenExpiration();

    if (accessToken && expiration && expiration.toISOString() > new Date().toISOString()) {
      return true;
    }

    return false;
  }

  getAccessToken(): string {
    let { accessToken }: string = this.$localStorage; /*  eslint-disable-line  prefer-const */

    if (accessToken) {
      accessToken = JSON.parse(accessToken);
    }

    return accessToken;
  }

  getAccessTokenExpiration(): Date {
    let { accessTokenExpiration }: string = this.$localStorage;

    if (accessTokenExpiration) {
      return new Date(accessTokenExpiration);
    }
    return undefined;
  }

  setAccessToken(accessToken: string): void {
    this.$localStorage.accessToken = JSON.stringify(accessToken);
  }

  setAccessTokenExpiration(tokenExpiration: Date): void {
    this.$localStorage.accessTokenExpiration = new Date(tokenExpiration).toISOString();
  }

  removeAccessToken(): boolean {
    delete this.$localStorage.accessToken;
    delete this.$localStorage.accessTokenExpiration;
    return true;
  }

  redirectToLogin(): boolean {
    this.$location.url('/login');
    return true;
  }
}
