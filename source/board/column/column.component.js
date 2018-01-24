import ColumnComponentTemplate from './column.component.html';
import ColumnComponentController from './column.component.controller';

import BoardComponent from '../board.component';

export default {
  NAME: 'column',
  bindings: {
    columnId: '<',
    name: '<',
    cardCount: '<',
    color: '=',
    columns: '=',
  },
  template: ColumnComponentTemplate,
  controller: ColumnComponentController.NAME,
};
