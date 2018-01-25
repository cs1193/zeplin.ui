import CardFooterComponentTemplate from './card-footer.component.html';

export default {
  NAME: 'cardFooter',
  bindings: {
    remainder: '<',
    taskCompleted: '<',
    taskTotal: '<',
    comment: '<',
    sharedProfile: '=',
  },
  template: CardFooterComponentTemplate,
  transclude: true,
};
