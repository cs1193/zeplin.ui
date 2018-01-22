/* @flow */
import BoardService from './board.service';

export default class CardEditorComponentController {
  static NAME: string = 'CardEditorComponentController';

  /* @ngInject */
  constructor($log, $scope, $stateParams, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.BoardService = BoardService;
  }
}
