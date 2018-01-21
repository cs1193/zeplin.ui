/* @flow */
/* @ngInject */

import BoardComponent from './board.component';

export default function BoardConfig($stateProvider) {
  const boardState: object = {
    state: 'board',
    stateDefinition: {
      url: 'board/:boardId',
      component: BoardComponent.NAME,
    },
  };

  $stateProvider
    .state(boardState.state, boardState.stateDefinition);
}
