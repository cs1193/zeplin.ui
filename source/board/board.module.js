/* @flow */

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';

import BoardComponent from './board.component';
import BoardComponentController from './board.component.controller';

import BoardHeaderComponent from './board-header/board-header.component';

import ColumnListComponent from './column-list/column-list.component';
import ColumnListComponentController from './column-list/column-list.component.controller';

import ColumnComponent from './column/column.component';

import BoardService from './board.service';

import BoardConfig from './board.config';

declare var BOARD_ENDPOINT: string;
declare var CARD_ENDPOINT: string;

export default angular.module('zeplin.ui.board', [
  angularUIRouter,
  angularUIBootstrap,
])
  .constant('BOARD_ENDPOINT', BOARD_ENDPOINT)
  .constant('CARD_ENDPOINT', CARD_ENDPOINT)
  .component(BoardComponent.NAME, BoardComponent)
  .controller(BoardComponentController.NAME, BoardComponentController)
  .component(BoardHeaderComponent.NAME, BoardHeaderComponent)
  .component(ColumnListComponent.NAME, ColumnListComponent)
  .controller(ColumnListComponentController.NAME, ColumnListComponentController)
  .component(ColumnComponent.NAME, ColumnComponent)
  .service(BoardService.NAME, BoardService)
  .config(BoardConfig)
  .name;
