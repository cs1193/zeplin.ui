/* @flow */

export default class ColumnComponentController {
  static NAME: string = 'ColumnComponentController';

  /* @ngInject */
  constructor($log) {
    this.$log = $log;
  }

  $onInit() {
    this.columns = [];
  }
}
