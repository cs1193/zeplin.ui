/* @flow */

export default class CardListComponentController {
  static NAME: string = 'CardListComponentController';

  /* @ngInject */
  constructor($log) {
    this.$log = $log;
  }

  handleDrop(item, bin) {
    this.$log.log(`Item ${item} has been dropped ${bin}`);
  }
}
