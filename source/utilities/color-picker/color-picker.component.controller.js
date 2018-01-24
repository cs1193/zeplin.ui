/* @flow */

export default class ColorPickerComponentController {
  static NAME: string = 'ColorPickerComponentController';

  /* @ngInject */
  constructor($log, COLOR_PICKER) {
    this.$log = $log;
    this.colors = COLOR_PICKER;
  }

  select(color) {
    this.$log.log(this.selectedColor, color);
    this.selectedColor = color;
  }
}
