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
    'ngTouch',
  ])
  .run(['$http', '$cookies', function($http, $cookies) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // $http.defaults.headers.common['Cookie'] = $cookies.get("auth_tkt");
  }])
  .provider('myCSRF',[function(){
    var headerName = 'X-CSRFToken';
    var cookieName = 'csrftoken';
    var allowedMethods = ['GET'];

    this.setHeaderName = function(n) {
      headerName = n;
    }
    this.setCookieName = function(n) {
      cookieName = n;
    }
    this.setAllowedMethods = function(n) {
      allowedMethods = n;
    }
    this.$get = ['$cookies', function($cookies){
      return {
        'request': function(config) {
          if(allowedMethods.indexOf(config.method) === -1) {
            // do something on success
            config.headers[headerName] = $cookies[cookieName];
          }
          return config;
        }
      }
    }];
  }])
  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('myCSRF');

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
  });

