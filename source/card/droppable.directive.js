/* @flow */

export default class DroppableDirective {
  static NAME: string = 'droppable';

  /* @ngInject */
  static factory($log) {
    return {
      restrict: 'A',
      scope: {
        drop: '&',
        bin: '=',
      },
      link(scope, element, attributes, controller) {
        let newElement = element[0];

        newElement.addEventListener('dragover', (event) => {
          event.dataTransfer.dropEffect = 'move';
          if (event.preventDefault) {
            event.preventDefault();
          }
          $log.log('DragOver');
          return false;
        }, false);

        newElement.addEventListener('dragenter', (event) => {
          $log.log('DragOver');
          return false;
        }, false);

        newElement.addEventListener('dragleave', (event) => {
          $log.log('DragLeave');
          return false;
        }, false);

        newElement.addEventListener('drop', (event) => {
          if (event.stopPropagation) {
            return event.stopPropagation();
          }

          $log.log('Drop');

          let binId = this.id;
          let item = document.getElementById(event.dataTransfer.getData('Text'));
          this.appendChild(item);

          scope.$apply((scope) => {
            const fn = scope.drop();

            if (typeof fn !== 'undefined') {
              fn(item.id, binId);
            }
          }, false);

          return false;
        }, false);
      },
    };
  }
}
