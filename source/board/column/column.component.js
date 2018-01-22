import ColumnComponentTemplate from './column.component.html';

export default {
  NAME: 'column',
  bindings: {
    label: '<',
    cardCount: '<',
    color: '=',
  },
  require: {
    columnList: '^^',
  },
  template: ColumnComponentTemplate,
  transclude: true,
};
