/* @flow */


import CardService from '../../card/card.service';

export default class ColumnComponentController {
  static NAME: string = 'ColumnComponentController';

  /* @ngInject */
  constructor($log, $scope, CardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.CardService = CardService;
  }

  $onInit() {
    this.cards = [];

    if (this.columnId) {
      this.CardService.getCardByColumnId(this.columnId)
        .then((response) => {
          this.cards = response;
        }, (error) => {
          this.$log.log('Error');
        });
    }

    this.$scope.$on(`card-${this.columnId}`, (event, data) => {
      this.cards.push(data.card);
      this.$scope.$apply();
    });
  }
}
