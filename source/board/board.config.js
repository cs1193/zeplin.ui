/* @flow */
/* @ngInject */

import AuthenticationRouteResolver from '../authentication/authentication.routeresolver';
import AuthenticationHttpInterceptor from '../authentication/authentication.httpinterceptor';

import BoardComponent from './board.component';

export default function BoardConfig($stateProvider, $httpProvider) {
  const boardState: object = {
    state: 'board',
    stateDefinition: {
      url: '/board/:boardId',
      component: BoardComponent.NAME,
      resolve: {
        authenticate: AuthenticationRouteResolver,
      },
    },
  };

  $stateProvider
    .state(boardState.state, boardState.stateDefinition);

  $httpProvider.interceptors.push(AuthenticationHttpInterceptor.NAME);
}
