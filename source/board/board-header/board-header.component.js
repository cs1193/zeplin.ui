import BoardHeaderComponentTemplate from './board-header.component.html';

export default {
  NAME: 'boardHeader',
  bindings: {
    name: '<',
    columns: '=',
  },
  template: BoardHeaderComponentTemplate,
  transclude: true,
};
