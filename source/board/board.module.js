/* @flow */

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';
import ngToast from 'ng-toast';

import ngDraggable from 'ngdraggable';

import AuthenticationModule from '../authentication/authentication.module';
import CardModule from '../card/card.module';

import BoardComponent from './board.component';
import BoardComponentController from './board.component.controller';

import BoardHeaderComponent from './board-header/board-header.component';

import BoardEditorComponent from './board-editor/board-editor.component';
import BoardEditorComponentController from './board-editor/board-editor.component.controller';
import BoardNameCheckDirective from './board-editor/board-name-check.directive';

import BoardListComponent from './board-list/board-list.component';
import BoardListComponentController from './board-list/board-list.component.controller';

import NewBoardComponent from './new-board/new-board.component';
import NewBoardComponentController from './new-board/new-board.component.controller';

import ColumnListComponent from './column-list/column-list.component';
import ColumnListComponentController from './column-list/column-list.component.controller';

import ColumnComponent from './column/column.component';
import ColumnComponentController from './column/column.component.controller';

import NewColumnComponent from './new-column/new-column.component';
import NewColumnComponentController from './new-column/new-column.component.controller';

import ColumnEditorComponent from './column-editor/column-editor.component';
import ColumnEditorComponentController from './column-editor/column-editor.component.controller';

import ColumnHeaderComponent from './column/column-header/column-header.component';

import BoardService from './board.service';

import BoardConfig from './board.config';

declare var GET_BOARD_BY_ID_ENDPOINT: string;
declare var GET_BOARD_BY_NAME_ENDPOINT: string;
declare var GET_BOARDS_ENDPOINT: string;
declare var CREATE_BOARD_ENDPOINT: string;
declare var BOARD_ENDPOINT: string;

export default angular.module('zeplin.ui.board', [
  angularUIRouter,
  angularUIBootstrap,
  ngSanitize,
  'ngDraggable',
  'ngToast',
  CardModule,
  AuthenticationModule,
])
  .constant('GET_BOARD_BY_ID_ENDPOINT', GET_BOARD_BY_ID_ENDPOINT)
  .constant('GET_BOARD_BY_NAME_ENDPOINT', GET_BOARD_BY_NAME_ENDPOINT)
  .constant('GET_BOARDS_ENDPOINT', GET_BOARDS_ENDPOINT)
  .constant('CREATE_BOARD_ENDPOINT', CREATE_BOARD_ENDPOINT)
  .constant('BOARD_ENDPOINT', BOARD_ENDPOINT)
  .component(BoardComponent.NAME, BoardComponent)
  .controller(BoardComponentController.NAME, BoardComponentController)
  .component(BoardHeaderComponent.NAME, BoardHeaderComponent)
  .component(ColumnListComponent.NAME, ColumnListComponent)
  .controller(ColumnListComponentController.NAME, ColumnListComponentController)
  .component(ColumnComponent.NAME, ColumnComponent)
  .component(ColumnHeaderComponent.NAME, ColumnHeaderComponent)
  .controller(ColumnComponentController.NAME, ColumnComponentController)
  .component(NewBoardComponent.NAME, NewBoardComponent)
  .controller(NewBoardComponentController.NAME, NewBoardComponentController)
  .component(BoardListComponent.NAME, BoardListComponent)
  .controller(BoardListComponentController.NAME, BoardListComponentController)
  .component(BoardEditorComponent.NAME, BoardEditorComponent)
  .controller(BoardEditorComponentController.NAME, BoardEditorComponentController)
  .directive(BoardNameCheckDirective.NAME, BoardNameCheckDirective.factory)
  .component(NewColumnComponent.NAME, NewColumnComponent)
  .controller(NewColumnComponentController.NAME, NewColumnComponentController)
  .component(ColumnEditorComponent.NAME, ColumnEditorComponent)
  .controller(ColumnEditorComponentController.NAME, ColumnEditorComponentController)
  .service(BoardService.NAME, BoardService)
  .config(BoardConfig)
  .name;
