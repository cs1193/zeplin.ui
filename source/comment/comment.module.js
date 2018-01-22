import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import CommentIndicatorComponent from './comment-indicator/comment-indicator.component';

export default angular.module('zeplin.ui.comment', [
  angularUIBootstrap,
])
  .component(CommentIndicatorComponent.NAME, CommentIndicatorComponent)
  .name;
