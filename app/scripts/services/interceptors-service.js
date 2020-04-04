'use strict';

/**
 * @ngdoc service
 * @name appApp.interceptorsService
 * @description
 * # interceptorsService
 * Factory in the appApp.
 */
angular
  .module('appApp')
  .factory('interceptorsService', interceptorsService);

function interceptorsService($rootScope, $q, $window, SweetAlert){

  var service = {
    request: request,
    response: response,
    responseError: responseError,
  };

  return service;

  // Inyecta en header Content-Type a todas las peticiones POST
  function request(config) {

    if (config.method === 'POST') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return config;
  }


  // Extrae el usuario actual del localstorage
  function response(response) {

    $rootScope.usuarioActual = JSON.parse(localStorage.getItem('actualUsuario'));

    if (response.status === 200 && !$rootScope.usuarioActual ) {
      $window.location.href = '#!/';
    }

    return response;
  }

  // Verifica que se produzca status 401 de error de permisos
  function responseError(rejection) {

    if (rejection.status === 401 && $rootScope.usuarioActual) {
      $window.location.href = '#!/inicio';
    } else if (rejection.status === 401 && !$rootScope.usuarioActual) {
      $window.location.href = '#!/';
    }

    return $q.reject(rejection);

  }

}
