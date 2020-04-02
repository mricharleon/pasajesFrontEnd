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

function interceptorsService($rootScope, $q, $window){

  var service = {
    response: response,
    responseError: responseError,
  };

  return service;

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
