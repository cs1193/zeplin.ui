import NavigationItemComponentTemplate from './navigation-item.component.html';

export default {
  NAME: 'navigationItem',
  replace: true,
  bindings: {
    title: '<',
    dropdown: '<',
  },
  template: NavigationItemComponentTemplate,
  transclude: true,
};
