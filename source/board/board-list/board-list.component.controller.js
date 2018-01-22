/* @flow */

import BoardService from '../board.service';

export default class BoardListComponentController {
  static NAME: string = 'BoardListComponentController';

  /* @ngInject */
  constructor($log, $scope, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.BoardService = BoardService;
  }

  $onInit() {
    this.loadingBoards = true;
    this.BoardService.getBoards()
      .then((data) => {
        if (data.boards && data.boards.length > 0) {
          this.boards = data.boards;
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
}
