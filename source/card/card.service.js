/* @flow */

export default class CardService {
  static NAME: string = 'CardService';

  /* @ngInject */
  constructor($log, $q, $http, CARD_ENDPOINT) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.CARD_ENDPOINT = CARD_ENDPOINT;
  }

  getCardById(id) {
    const deferred = this.$q.defer();

    this.$http.get(`${this.CARD_ENDPOINT}/${id}`).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
