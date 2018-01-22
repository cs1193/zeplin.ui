/* @flow */
import CardService from '../card.service';

export default class CardEditorComponentController {
  static NAME: string = 'CardEditorComponentController';

  /* @ngInject */
  constructor($log, $scope, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.BoardService = BoardService;
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
