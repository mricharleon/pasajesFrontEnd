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

  function sitioService($http){

    var service = {
      getSitios: getSitios,
    };

    return service;

    // Obtiene todos los sitios
    function getSitios() {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/sitios'
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

  }
