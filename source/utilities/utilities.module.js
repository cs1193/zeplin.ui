/* @flow */

import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import EmailAddressDirective from './emailaddress.directive';
import ColorPickerComponent from './color-picker/color-picker.component';
import ColorPickerComponentController from './color-picker/color-picker.component.controller';

declare var COLOR_PICKER: array;

export default angular.module('zeplin.ui.utilities', [
  angularUIBootstrap,
])
  .constant('COLOR_PICKER', COLOR_PICKER)
  .component(ColorPickerComponent.NAME, ColorPickerComponent)
  .controller(ColorPickerComponentController.NAME, ColorPickerComponentController)
  .directive(EmailAddressDirective.NAME, EmailAddressDirective.factory)
  .name;
