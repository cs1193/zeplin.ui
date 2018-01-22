import CardEditorComponentTemplate from './card-editor.component.html';
import CardEditorComponentController from './card-editor.component.controller';

export default {
  NAME: 'cardEditor',
  bindings: {
    columnId: '<?',
  },
  template: CardEditorComponentTemplate,
  controller: CardEditorComponentController.NAME,
  transclude: true,
};
