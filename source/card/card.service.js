/* @flow */

export default class CardService {
  static NAME: string = 'CardService';

  /* @ngInject */
  constructor($log, $q, $http, CARD_ENDPOINT, CARDS_COLUMN_ENDPOINT) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.CARD_ENDPOINT = CARD_ENDPOINT;
    this.CARDS_COLUMN_ENDPOINT = CARDS_COLUMN_ENDPOINT;
  }

  getCardByColumnId(columnId) {
    const deferred = this.$q.defer();

    this.$http.get(`${this.CARDS_COLUMN_ENDPOINT}${columnId}`)
      .then((response) => {
        if (response && response.data && (response.status === 200 || response.status === 201)) {
          deferred.resolve(response.data);
        }
      }, (error) => {
        deferred.reject(error);
      });

    return deferred.promise;
  }

  createCard(cardData) {
    const deferred = this.$q.defer();

    this.$http.post(`${this.CARD_ENDPOINT}`, {
      text: cardData.text,
      description: cardData.description,
      color: cardData.color,
      columnId: cardData.columnId,
    }).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
