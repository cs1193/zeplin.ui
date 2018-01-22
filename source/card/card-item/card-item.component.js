import CardItemComponentTemplate from './card-item.component.html';

export default {
  NAME: 'cardItem',
  bindings: {
    text: '<',
    image: '<',
    comments: '<',
    subtasks: '<',
    color: '<',
    shared: '=',
  },
  template: CardItemComponentTemplate,
  transclude: true,
};
