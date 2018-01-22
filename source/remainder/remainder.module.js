import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import RemainderIndicatorComponent from './remainder-indicator/remainder-indicator.component';

export default angular.module('zeplin.ui.remainder', [
  angularUIBootstrap,
])
  .component(RemainderIndicatorComponent.NAME, RemainderIndicatorComponent)
  .name;
