'use strict';

angular
  .module('appApp.config')
  .config(coreRoutes);

function coreRoutes($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'loginVm'
    })
    .when('/registro', {
      templateUrl: 'views/registro.html',
      controller: 'RegistroCtrl',
      controllerAs: 'registroVm'
    })
    .when('/activar/:cod_verificacion', {
      template: null,
      controller: 'ActivarCtrl',
      controllerAs: 'activarVm'
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
    .when('/edit-pasaje', {
      templateUrl: 'views/pasaje-edit.html',
      controller: 'PasajeEditCtrl',
      controllerAs: 'pasajeEditVm'
    })
    .when('/add-pasaje', {
      templateUrl: 'views/pasaje-add.html',
      controller: 'PasajeAddCtrl',
      controllerAs: 'pasajeAddVm'
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
    .when('/add-cooperativa', {
      templateUrl: 'views/cooperativa-add.html',
      controller: 'CooperativaAddCtrl',
      controllerAs: 'cooperativaAddVm'
    })
    .otherwise({
      redirectTo: '/'
    });

  }
