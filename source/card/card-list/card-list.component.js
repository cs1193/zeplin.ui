import CardListComponentTemplate from './card-list.component.html';

export default {
  NAME: 'cardList',
  bindings: {
    color: '<',
  },
  template: CardListComponentTemplate,
  transclude: true,
};
