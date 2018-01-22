/* @flow */
import CardService from '../card.service';

export default class CardEditorComponentController {
  static NAME: string = 'CardEditorComponentController';

  /* @ngInject */
  constructor($log, $scope, CardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.CardService = CardService;
  }

  $onInit() {
    if (this.resolve.columnId) {
      this.$log.log('Defined');
    }
    this.$log.log('Undefined');
  }

  cancel() {
    this.modalInstance.dismiss('cancel');
  }
}
