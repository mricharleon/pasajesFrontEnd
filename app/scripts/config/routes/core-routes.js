'use strict';

angular
  .module('appApp.config')
  .config(coreRoutes);

function coreRoutes($routeProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginVm'
      })
      .when('/logout', {
        template: null,
        controller: 'LogoutCtrl',
        controllerAs: 'logoutVm'
      })
      .when('/inicio', {
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

  }
