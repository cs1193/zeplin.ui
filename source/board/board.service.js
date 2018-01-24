/* @flow */

export default class BoardService {
  static NAME: string = 'BoardService';

  /* @ngInject */
  constructor(
    $log,
    $q,
    $http,
    BOARD_ENDPOINT,
    VALIDATION_ENDPOINT,
  ) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.BOARD_ENDPOINT = BOARD_ENDPOINT;
    this.VALIDATION_ENDPOINT = VALIDATION_ENDPOINT;
  }

  getBoards() {
    const deferred = this.$q.defer();

    this.$http.get(`${this.BOARD_ENDPOINT}`).then((response) => {
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

  getBoardByName(name): Promise {
    const deferred = this.$q.defer();

    this.$http.post(`${this.VALIDATION_ENDPOINT}/name`, {
      name,
    }).then((response) => {
      deferred.resolve(response);
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  createBoard(board): Promise {
    const deferred = this.$q.defer();

    this.$http.post(`${this.BOARD_ENDPOINT}`, board).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
