/* @flow */
import BoardService from '../board.service';

export default class BoardEditorComponentController {
  static NAME: string = 'BoardEditorComponentController';

  /* @ngInject */
  constructor($log, $scope, BoardService) {
    this.$log = $log;
    this.$scope = $scope;
    this.BoardService = BoardService;
  }

  createBoard() {
    this.BoardService.createBoard({
      name: this.newBoardForm.name,
    }).then((response) => {
      this.modalInstance.close({
        message: 'Success! New Board Created.',
      });
    }, (error) => {
      this.modalInstance.close({
        message: 'Error! Creating new Board',
      });
    });
  }

  cancel() {
    this.modalInstance.dismiss('cancel');
  }
}
