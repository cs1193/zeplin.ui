import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import BoardComponent from './board.component';
import BoardComponentController from './board.component.controller';

import BoardService from './board.service';

import BoardConfig from './board.config';

export default angular.module('zeplin.ui.board', [
  angularUIBootstrap,
])
  .component(BoardComponent.NAME, BoardComponent)
  .controller(BoardComponentController.NAME, BoardComponentController)
  .service(BoardService.NAME, BoardService)
  .config(BoardConfig)
  .name;
