'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pasaje.html',
        controller: 'PasajeCtrl',
        controllerAs: 'pasajeVm'
      })
      .when('/crear-boleto', {
        templateUrl: 'views/boleto-add.html',
        controller: 'BoletoAddCtrl',
        controllerAs: 'boletoAddVm'
      })
      .when('/mis-boletos', {
        templateUrl: 'views/boleto-list.html',
        controller: 'boletoListCtrl',
        controllerAs: 'boletoListVm'
      })
      .when('/list-pasajes', {
        templateUrl: 'views/pasaje-list.html',
        controller: 'PasajeListCtrl',
        controllerAs: 'pasajeListVm'
      })
      .when('/edit-pasaje', {
        templateUrl: 'views/pasaje-edit.html',
        controller: 'PasajeEditCtrl',
        controllerAs: 'pasajeEditVm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
