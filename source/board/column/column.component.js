import ColumnComponentTemplate from './column.component.html';

export default {
  NAME: 'column',
  bindings: {
    title: '<',
    color: '=',
  },
  require: {
    columnList: '^^',
  },
  template: ColumnComponentTemplate,
  transclude: true,
};
