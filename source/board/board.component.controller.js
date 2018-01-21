/* @flow */
import BoardService from './board.service';

export default class BoardComponentController {
  static NAME: string = 'BoardComponentController';

  /* @ngInject */
  constructor($log, $scope, $stateParams, DashboardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.BoardService = BoardService;

    this.boardid = this.$stateParams.broadid;
  }
}
