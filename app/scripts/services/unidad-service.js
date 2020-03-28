'use strict';

/**
 * @ngdoc service
 * @name appApp.unidadService
 * @description
 * # unidadService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('unidadService', unidadService);

  function unidadService($http){

    var service = {
      getUnidades: getUnidades,
    };

    return service;

    // Obtiene todos las unidades
    function getUnidades() {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/unidades'
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

  }
