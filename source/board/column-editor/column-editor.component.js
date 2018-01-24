import ColumnEditorComponentTemplate from './column-editor.component.html';
import ColumnEditorComponentController from './column-editor.component.controller';

export default {
  NAME: 'columnEditor',
  bindings: {
    modalInstance: '<',
    resolve: '<',
  },
  template: ColumnEditorComponentTemplate,
  controller: ColumnEditorComponentController.NAME,
};
