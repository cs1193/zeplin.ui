/* @flow */
/* @ngInject */

export default function TaskConfig($stateProvider) {
  $stateProvider
    .state('task', {
      url: '/task',
      template: '<div><board></board></div>',
    });
}
