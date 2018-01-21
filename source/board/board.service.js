/* @flow */

export default class BoardService {
  /* @ngInject */
  constructor($log, $q, $http, BOARD_ENDPOINT, CARD_ENDPOINT) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.BOARD_ENDPOINT = BOARD_ENDPOINT;
    this.CARD_ENDPOINT = CARD_ENDPOINT;
  }

  getBoardById(id) {
    const deferred = this.$q.defer();

    this.$http.get(this.BOARD_ENDPOINT).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });
  }
}
