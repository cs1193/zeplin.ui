import CardListComponentTemplate from './card-list.component.html';
import CardListComponentController from './card-list.component.controller';

export default {
  NAME: 'cardList',
  bindings: {
    color: '<',
  },
  template: CardListComponentTemplate,
  controller: CardListComponentController.NAME,
  transclude: true,
};
