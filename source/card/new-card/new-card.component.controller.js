/* @flow */
import CardEditorComponent from '../card-editor/card-editor.component';
import CardEditorComponentController from '../card-editor/card-editor.component.controller';

export default class NewCardComponentController {
  static NAME: string = 'NewCardComponentController';

  /* @ngInject */
  constructor($log, $scope, $uibModal, ngToast) {
    this.$log = $log;
    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.ngToast = ngToast;
  }

  open() {
    const $ctrl = this;
    const modalInstance = this.$uibModal.open({
      component: CardEditorComponent.NAME,
      size: 'lg',
      backdrop: 'static',
      controller: CardEditorComponentController.NAME,
      controllerAs: '$ctrl',
      resolve: {
        columnId() {
          return $ctrl.columnId;
        },
      },
    });

    modalInstance.result.then((instance) => {
      this.$log.log('Modal Opened');
    }, (error) => {
      this.$log.log('Modal Closed');
    });
  }
}
