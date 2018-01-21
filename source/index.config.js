/* @flow */
/* @ngInject */

export default function IndexConfig($stateProvider) {
  $stateProvider
    .state('default', {
      url: '/',
      template: '<div>Hello</div>',
    });
}
