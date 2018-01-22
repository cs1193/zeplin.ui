import CardComponentTemplate from './card.component.html';

export default {
  NAME: 'card',
  bindings: {
    text: '<',
    image: '<',
    comments: '<',
    subtasks: '<',
    color: '<',
    shared: '=',
  },
  template: CardComponentTemplate,
  transclude: true,
};
