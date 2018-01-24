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

    this.boardId = this.$stateParams.boardId;
  }

  $onInit() {
    this.loadingBoards = true;
    this.BoardService.getBoardById(this.boardId)
      .then((data) => {
        if (data) {
          this.boardName = data.name;
          this.loadingBoards = false;
          this.noBoards = false;
        } else {
          this.noBoards = true;
          this.loadingBoards = false;
        }
      }, (error) => {
        this.$log.log(error);
      });
  }

  createColumn(columnData) {
    this.BoardService.createColumbByBoardId(this.boardId, columnData)
      .then((data) => {
        if (data) {
          this.$log.log('Column Created');
        } else {
          this.$log.log('Column');
        }
      }, (error) => {
        this.$log.log(error);
      });
  }
}
