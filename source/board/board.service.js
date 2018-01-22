/* @flow */

export default class BoardService {
  static NAME: string = 'BoardService';

  /* @ngInject */
  constructor($log, $q, $http, GET_BOARDS_ENDPOINT, BOARD_ENDPOINT) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.GET_BOARDS_ENDPOINT = GET_BOARDS_ENDPOINT;
    this.BOARD_ENDPOINT = BOARD_ENDPOINT;
  }

  getBoards() {
    const deferred = this.$q.defer();

    this.$http.get(`${this.GET_BOARDS_ENDPOINT}`).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  getBoardById(id) {
    const deferred = this.$q.defer();

    this.$http.get(`${this.BOARD_ENDPOINT}/${id}`).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
