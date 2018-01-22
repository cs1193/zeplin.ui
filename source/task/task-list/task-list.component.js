import TaskListComponentTemplate from './task-list.component.html';
import TaskListComponentController from './task-list.component.controller';

export default {
  NAME: 'taskList',
  bindings: {
    list: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&',
  },
  template: TaskListComponentTemplate,
  controller: TaskListComponentController.NAME,
};
