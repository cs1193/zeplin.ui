/* @flow */
import ColumnEditorComponent from '../column-editor/column-editor.component';
import ColumnEditorComponentController from '../column-editor/column-editor.component.controller';

export default class NewColumnComponentController {
  static NAME: string = 'NewColumnComponentController';

  /* @ngInject */
  constructor($log, $scope, $uibModal, ngToast) {
    this.$log = $log;
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.ngToast = ngToast;
  }

  $onInit() {
    this.board.newColumnMethod();
  }

  open() {
    const $ctrl = this;
    const modalInstance = this.$uibModal.open({
      component: ColumnEditorComponent.NAME,
      size: 'lg',
      backdrop: 'static',
      controller: ColumnEditorComponentController.NAME,
      controllerAs: '$ctrl',
      resolve: {
        boardId() {
          return $ctrl.boardId;
        },
        boardName() {
          return $ctrl.boardName;
        },
      },
    });

    modalInstance.result.then((instance) => {
      this.ngToast.create(instance.message);
    }, (error) => {
      this.$log.log('Modal Closed');
    });
  }
}
