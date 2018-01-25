/* @flow */

export default class DraggableDirective {
  static NAME: string = 'draggable';

  /* @ngInject */
  static factory($log) {
    return {
      restrict: 'A',
      link(scope, element) {
        let newElement = element[0];
        newElement.draggable = true;

        newElement.addEventListener('dragstart', (event) => {
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('card', this.id);
          $log.log('DragStart');
          return false;
        }, false);

        newElement.addEventListener('dragend', (event) => {
          $log.log('DragEnd');
          return false;
        }, false);
      },
    };
  }
}
