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

    if (accessToken) {
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

  setAccessToken(accessToken: string): void {
    this.$localStorage.accessToken = JSON.stringify(accessToken);
  }

  removeAccessToken(): boolean {
    delete this.$localStorage.accessToken;
    return true;
  }

  redirectToLogin(): boolean {
    this.$location.url('/login');
    return true;
  }
}
