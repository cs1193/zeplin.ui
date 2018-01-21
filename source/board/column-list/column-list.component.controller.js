/* @flow */
import BoardService from '../board.service';

export default class ColumnListComponentController {
  static NAME: string = 'ColumnListComponentController';

  /* @ngInject */
  constructor($log) {
    this.$log = $log;
  }

  $onInit() {
    this.columns = [];
  }

  addColumn(column) {
    this.columns.push(column);
  }
}
