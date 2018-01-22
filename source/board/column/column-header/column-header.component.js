import ColumnHeaderComponentTemplate from './column-header.component.html';

export default {
  NAME: 'columnHeader',
  bindings: {
    label: '<',
  },
  template: ColumnHeaderComponentTemplate,
  transclude: true,
};
