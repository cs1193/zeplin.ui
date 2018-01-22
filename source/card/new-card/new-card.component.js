import NewCardComponentTemplate from './new-card.component.html';
import NewCardComponentController from './new-card.component.controller';

export default {
  NAME: 'newCard',
  bindings: {
    rounded: '<',
  },
  template: NewCardComponentTemplate,
  controller: NewCardComponentController.NAME,
};
