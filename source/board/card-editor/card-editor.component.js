import CardEditorComponentTemplate from './card-editor.component.html';
import CardEditorComponentController from './card-editor.component.controller';

export default {
  NAME: 'cardEditor',
  template: CardEditorComponentTemplate,
  controller: CardEditorComponentController.NAME,
  transclude: true,
};
