import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import SharedProfileIndicatorComponent from './shared-profile-indicator/shared-profile-indicator.component';

export default angular.module('zeplin.ui.user', [
  angularUIBootstrap,
])
  .component(SharedProfileIndicatorComponent.NAME, SharedProfileIndicatorComponent)
  .name;
