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
    this.columns = this.resolve.columns;
  }

  createCard() {
    this.CardService.createCard(this.newCardForm)
      .then((response) => {
        this.modalInstance.close({
          status: 'success',
          message: 'Success! New Card Created.',
          card: response,
        });
      }, (error) => {
        this.$log.log('Error! Creating new Card');
      });
  }

  cancel() {
    this.modalInstance.dismiss('cancel');
  }
}
