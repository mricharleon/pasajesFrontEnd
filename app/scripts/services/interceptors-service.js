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

function interceptorsService($rootScope,
                             $q,
                             $window, SweetAlert){

  var service = {
    request: request,
    response: response,
    responseError: responseError,
    deleteUsuarioLogueado: deleteUsuarioLogueado,
  };

  return service;

  // Inyecta en header Content-Type a todas las peticiones POST
  function request(config) {

    if (config.method === 'POST' || config.method === 'PUT' ) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return config;
  }

  // Extrae el usuario y menu actual del localstorage
  function response(response) {

    $rootScope.usuarioActual = JSON.parse(localStorage.getItem('actualUsuario'));
    $rootScope.menu = JSON.parse(localStorage.getItem('menu'));
    if (response.status === 200 && !$rootScope.usuarioActual && !response.config.url.match('views/registro.html') ) {
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

    if (rejection.status === 404) {
      SweetAlert.swal("Ha ocurrido algo!", rejection.data.msg, "error");
      $window.location.href = '#!/inicio';
    }

    if (rejection.status === 500) {
      SweetAlert.swal("Ha ocurrido algo!",
                      rejection.data.msg ? rejection.data.msg : "Tu sesión ha caducado! \nInicia sesión nuevamente!",
                      "error");
      deleteUsuarioLogueado();
      $window.location.href = '#!/';
    }

    return $q.reject(rejection);

  }

  // Elimina el usuario en localStorage
  function deleteUsuarioLogueado() {
    localStorage.removeItem('actualUsuario');
    localStorage.removeItem('menu');
  }

}
