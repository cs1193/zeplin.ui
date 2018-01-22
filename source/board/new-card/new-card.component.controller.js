/* @flow */
import CardEditorComponent from '../card-editor/card-editor.component';

export default class NewCardComponentController {
  static NAME: string = 'NewCardComponentController';

  /* @ngInject */
  constructor($log, $scope, $uibModal) {
    this.$log = $log;
    this.$scope = $scope;
    this.$uibModal = $uibModal;
  }

  open() {
    const modalInstance = this.$uibModal.open({
      component: CardEditorComponent.NAME,
      size: 'lg',
    });

    modalInstance.result.then((instance) => {
      this.$log.log('Modal Opened');
    }, (error) => {
      this.$log.log('Modal Closed');
    });
  }
}
