'use strict';

/**
 * @ngdoc service
 * @name appApp.sitioService
 * @description
 * # sitioService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('sitioService', sitioService);

  function sitioService($http,
                        $q,
                        APP){

    var service = {
      getSitios: getSitios,
    };

    return service;

    // Obtiene todos los sitios
    function getSitios() {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/sitios',
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

  }
