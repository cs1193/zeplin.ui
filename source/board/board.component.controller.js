/* @flow */
import BoardService from './board.service';

export default class BoardComponentController {
  static NAME: string = 'BoardComponentController';

  /* @ngInject */
  constructor($log, $scope, $stateParams, ngToast, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.ngToast = ngToast;
    this.BoardService = BoardService;

    this.boardId = this.$stateParams.boardId;
  }

  $onInit() {
    this.loadingBoards = true;
    this.BoardService.getBoardById(this.boardId)
      .then((data) => {
        if (data) {
          this.boardName = data.name;
          this.columnCount = data.columnCount;
          this.columns = data.columns;
          this.loadingBoards = false;
          this.noBoards = false;
        } else {
          this.noBoards = true;
          this.loadingBoards = false;
        }
      }, (error) => {
        this.$log.log(error);
      });

    this.BoardService.getColumnsByBoardId(this.boardId)
      .then((data) => {
        if (data) {
          this.columns = data;
        } else {
          this.$log.log('No Columns');
        }
      }, (error) => {
        this.$log.log(error);
      });
  }

  createColumn(columnData) {
    this.BoardService.createColumbByBoardId(this.boardId, columnData)
      .then((data) => {
        if (data) {
          this.columns.push(data);
          this.$scope.$apply();
          this.ngToast.create('Column Created');
        } else {
          this.$log.log('Column');
        }
      }, (error) => {
        this.$log.log(error);
      });
  }

  updateColumn(cardData) {
    this.$log.log(cardData.card);
    this.$scope.$broadcast(`card-${cardData.card.columnId}`, cardData);
  }
}
