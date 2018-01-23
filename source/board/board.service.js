/* @flow */

export default class BoardService {
  static NAME: string = 'BoardService';

  /* @ngInject */
  constructor(
    $log,
    $q,
    $http,
    GET_BOARDS_ENDPOINT,
    GET_BOARD_BY_ID_ENDPOINT,
    GET_BOARD_BY_NAME_ENDPOINT,
    CREATE_BOARD_ENDPOINT,
  ) {
    this.$log = $log;
    this.$q = $q;
    this.$http = $http;
    this.GET_BOARDS_ENDPOINT = GET_BOARDS_ENDPOINT;
    this.GET_BOARD_BY_ID_ENDPOINT = GET_BOARD_BY_ID_ENDPOINT;
    this.GET_BOARD_BY_NAME_ENDPOINT = GET_BOARD_BY_NAME_ENDPOINT;
    this.CREATE_BOARD_ENDPOINT = CREATE_BOARD_ENDPOINT;
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

    this.$http.get(`${this.GET_BOARD_BY_ID_ENDPOINT}/${id}`).then((response) => {
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

    this.$http.post(`${this.GET_BOARD_BY_NAME_ENDPOINT}`, {
      name,
    }).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  createBoard(board): Promise {
    const deferred = this.$q.defer();

    this.$http.post(`${this.CREATE_BOARD_ENDPOINT}`, board).then((response) => {
      if (response && response.data && (response.status === 200 || response.status === 201)) {
        deferred.resolve(response.data);
      }
    }, (error) => {
      deferred.reject(error);
    });

    return deferred.promise;
  }
}
