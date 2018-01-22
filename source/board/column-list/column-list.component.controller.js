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


  onDragComplete(data, event) {
    this.$log.log('Drag Success', data);
  }

  onDropComplete(data, event) {
    this.$log.log('Drop Success', data);
  }
}
