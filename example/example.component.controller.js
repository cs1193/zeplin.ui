/* @flow */
export default class ExampleComponentController {
  static NAME: string = 'ExampleComponentController';

  /* @ngInject */
  constructor($log, VERSION, PACKAGE_NAME) {
    this.$log = $log;
    this.VERSION = VERSION;
    this.PACKAGE_NAME = PACKAGE_NAME;

    this.$log.log('DEMO', this.VERSION, this.PACKAGE_NAME);
  }
}
