/* @flow */
import BoardEditorComponent from '../board-editor/board-editor.component';
import BoardEditorComponentController from '../board-editor/board-editor.component.controller';

export default class NewBoardComponentController {
  static NAME: string = 'NewBoardComponentController';

  /* @ngInject */
  constructor($log, $scope, $uibModal) {
    this.$log = $log;
    this.$scope = $scope;
    this.$uibModal = $uibModal;
  }

  open() {
    const $ctrl = this;
    const modalInstance = this.$uibModal.open({
      component: BoardEditorComponent.NAME,
      size: 'lg',
      backdrop: 'static',
      controller: BoardEditorComponentController.NAME,
      controllerAs: '$ctrl',
      resolve: {},
    });

    modalInstance.result.then((instance) => {
      this.$log.log('Modal Opened');
    }, (error) => {
      this.$log.log('Modal Closed');
    });
  }
}
