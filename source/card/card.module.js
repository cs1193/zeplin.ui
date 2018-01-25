/* @flow */

import angular from 'angular';
import angularUIBootstrap from 'angular-ui-bootstrap';

import CardListComponent from './card-list/card-list.component';
import CardListComponentController from './card-list/card-list.component.controller';

import CardItemComponent from './card-item/card-item.component';
import CardTextComponent from './card-item/card-text/card-text.component';
import CardImageComponent from './card-item/card-image/card-image.component';
import CardFooterComponent from './card-item/card-footer/card-footer.component';

import CardEditorComponent from './card-editor/card-editor.component';
import CardEditorComponentController from './card-editor/card-editor.component.controller';

import NewCardComponent from './new-card/new-card.component';
import NewCardComponentController from './new-card/new-card.component.controller';

import CardService from './card.service';

import DraggableDirective from './draggable.directive';
import DroppableDirective from './droppable.directive';

declare var CARD_ENDPOINT: string;
declare var CARDS_COLUMN_ENDPOINT: string;

export default angular.module('zeplin.ui.card', [
  angularUIBootstrap,
])
  .constant('CARD_ENDPOINT', CARD_ENDPOINT)
  .constant('CARDS_COLUMN_ENDPOINT', CARDS_COLUMN_ENDPOINT)
  .component(CardListComponent.NAME, CardListComponent)
  .controller(CardListComponentController.NAME, CardListComponentController)
  .component(CardItemComponent.NAME, CardItemComponent)
  .component(CardTextComponent.NAME, CardTextComponent)
  .component(CardImageComponent.NAME, CardImageComponent)
  .component(CardFooterComponent.NAME, CardFooterComponent)
  .component(CardEditorComponent.NAME, CardEditorComponent)
  .controller(CardEditorComponentController.NAME, CardEditorComponentController)
  .component(NewCardComponent.NAME, NewCardComponent)
  .controller(NewCardComponentController.NAME, NewCardComponentController)
  .directive(DraggableDirective.NAME, DraggableDirective.factory)
  .directive(DroppableDirective.NAME, DroppableDirective.factory)
  .service(CardService.NAME, CardService)
  .name;
