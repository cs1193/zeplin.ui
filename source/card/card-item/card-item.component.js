import CardItemComponentTemplate from './card-item.component.html';

export default {
  NAME: 'cardItem',
  bindings: {
    text: '<',
    image: '<',
    comment: '<',
    taskCompleted: '<',
    taskTotal: '<',
    remainder: '<',
    color: '<',
    shared: '=',
  },
  template: CardItemComponentTemplate,
  transclude: true,
};
