'use strict';

/**
 * @ngdoc service
 * @name appApp.grupoService
 * @description
 * # grupoService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('grupoService', grupoService);

  function grupoService($http,
                        APP) {

    var service = {
      cargarGrupos: cargarGrupos,
    };

    return service;

    function cargarGrupos() {

      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/grupos'
      }).then(function success(resp) {
        return resp.data;
      },
      function error(resp) {
        return resp.data;
      });

    }

  }
