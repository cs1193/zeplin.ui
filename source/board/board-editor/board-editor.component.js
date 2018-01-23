import BoardEditorComponentTemplate from './board-editor.component.html';
import BoardEditorComponentController from './board-editor.component.controller';

export default {
  NAME: 'boardEditor',
  bindings: {
    modalInstance: '<',
    resolve: '<',
  },
  template: BoardEditorComponentTemplate,
  controller: BoardEditorComponentController.NAME,
};
