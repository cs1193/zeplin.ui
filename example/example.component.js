import ExampleComponentTemplate from './example.component.html';
import ExampleComponentController from './example.component.controller';

export default {
  NAME: 'example',
  template: ExampleComponentTemplate,
  transclude: true,
  controller: ExampleComponentController.NAME,
};
