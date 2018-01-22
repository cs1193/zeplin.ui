import RemainderIndicatorComponentTemplate from './remainder-indicator.component.html';

export default {
  NAME: 'remainderIndicator',
  bindings: {
    remainderTime: '<',
  },
  template: RemainderIndicatorComponentTemplate,
};
