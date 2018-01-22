import TaskIndicatorComponentTemplate from './task-indicator.component.html';

export default {
  NAME: 'taskIndicator',
  bindings: {
    taskId: '<',
    completed: '<',
    total: '<',
  },
  template: TaskIndicatorComponentTemplate,
};
