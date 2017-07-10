//This gets around a typescript / type definition problem with IDirectiveFactory 
declare var angular: angular.IAngularStatic;

import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '../app.component';

export const LegacyAppModule = angular.module('legacyAppModule', ['ngRoute']);

LegacyAppModule.component('legacyAppComponent', {
  template: `
    <h2>Legacy App Component</h2>
    <ng-view></ng-view>
    <app-component></app-component>`
})

LegacyAppModule
.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/legacy', {
      template: '<h2>Legacy Route</h2>',
    })
}])

LegacyAppModule
.directive('appComponent',
  downgradeComponent({
    component: AppComponent,
    outputs: ['callback']
  }) as angular.IDirectiveFactory
);