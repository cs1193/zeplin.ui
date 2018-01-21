/* @flow */
import BoardService from './board.service';

export default class BoardComponentController {
  static NAME: string = 'BoardComponentController';

  /* @ngInject */
  constructor($log, $scope, $stateParams, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.BoardService = BoardService;

    this.boardId = this.$stateParams.broadId;
  }

  $onInit() {
    this.$log.log(this.boardId);
  }
}
