import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';

import LayoutComponent from './layout/layout.component';
import AppHeader from './app-header/app-header.component';
import AppFooter from './app-footer/app-footer.component';
import AppMain from './app-main/app-main.component';

export default angular.module('zeplin.ui.common', [
  angularUIRouter,
  angularUIBootstrap,
])
  .component(AppHeader.NAME, AppHeader)
  .component(AppFooter.NAME, AppFooter)
  .component(AppMain.NAME, AppMain)
  .component(LayoutComponent.NAME, LayoutComponent)
  .name;
