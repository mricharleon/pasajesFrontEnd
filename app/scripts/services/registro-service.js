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
      check_generic_username_email: check_generic_username_email,
    };

    return service;


    // Verifica si ya existe un usuario con el mismo username e email
    function check_generic_username_email(path, check) {

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
