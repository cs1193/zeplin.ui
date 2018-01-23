/* @flow */

import AuthenticationService from './authentication.service';

/* @ngInject */
export default function AuthenticationRouteResolver ($q, AuthenticationService) {
  let deferred = $q.defer();

  if (AuthenticationService.isAuthenticated()) {
    deferred.resolve();
  } else {
    AuthenticationService.redirectToLogin();
    deferred.reject();
  }

  return deferred.promise;
}
