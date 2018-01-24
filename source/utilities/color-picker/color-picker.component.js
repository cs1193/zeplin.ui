import ColorPickerComponentTemplate from './color-picker.component.html';
import ColorPickerComponentController from './color-picker.component.controller';

export default {
  NAME: 'colorPicker',
  bindings: {
    selectedColor: '=',
  },
  template: ColorPickerComponentTemplate,
  controller: ColorPickerComponentController.NAME,
};
