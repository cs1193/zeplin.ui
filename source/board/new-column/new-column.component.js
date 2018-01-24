import NewColumnComponentTemplate from './new-column.component.html';
import NewColumnComponentController from './new-column.component.controller';

import BoardComponent from '../board.component';

export default {
  NAME: 'newColumn',
  bindings: {
    boardId: '<',
    boardName: '<',
  },
  require: {
    board: `^^${BoardComponent.NAME}`,
  },
  template: NewColumnComponentTemplate,
  controller: NewColumnComponentController.NAME,
};
