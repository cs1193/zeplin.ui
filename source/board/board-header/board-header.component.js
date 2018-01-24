import BoardHeaderComponentTemplate from './board-header.component.html';

export default {
  NAME: 'boardHeader',
  bindings: {
    name: '<',
  },
  template: BoardHeaderComponentTemplate,
  transclude: true,
};
