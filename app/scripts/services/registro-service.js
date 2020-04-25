'use strict';

/**
 * @ngdoc service
 * @name appApp.registroService
 * @description
 * # registroService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .factory('registroService', registroService);

  function registroService($http,
                           $q,
                           APP) {

    var service = {
      checkGenericUsernameEmail: checkGenericUsernameEmail,
      crearCuenta: crearCuenta,
    };

    return service;


    function crearCuenta(data) {

      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/usuarios',
        data: data,
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return resp.data;
      });

    }


    // Verifica si ya existe un usuario con el mismo username e email
    function checkGenericUsernameEmail(path, check) {

      return $http({
        method: 'GET',
        url: APP.apiHost + path + check
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });

    }

  }
