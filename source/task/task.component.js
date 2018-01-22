import TaskComponentTemplate from './task.component.html';
import TaskComponentController from './task.component.controller';

export default {
  NAME: 'task',
  bindings: {
    columnId: '<',
  },
  template: TaskComponentTemplate,
  controller: TaskComponentController.NAME,
};
