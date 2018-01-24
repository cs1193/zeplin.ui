import NewCardComponentTemplate from './new-card.component.html';
import NewCardComponentController from './new-card.component.controller';

import BoardComponent from '../../board/board.component';

export default {
  NAME: 'newCard',
  bindings: {
    rounded: '<',
    columnId: '<?',
    columns: '=',
  },
  require: {
    board: `^^${BoardComponent.NAME}`,
  },
  template: NewCardComponentTemplate,
  controller: NewCardComponentController.NAME,
};
