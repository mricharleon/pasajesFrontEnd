'use strict';

/**
 * @ngdoc service
 * @name appApp.pasajeService
 * @description
 * # pasajeService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('pasajeService', pasajeService);

  function pasajeService($http, $q){

    var service = {
      getAllPasajes: getAllPasajes,
      getPasajes: getPasajes,
      getPasaje: getPasaje
    };

    return service;

    // Obtiene todos los pasajes
    function getAllPasajes() {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/all/pasajes'
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }


    // Obtiene pasajes de acuerdo al criterio de busqueda
    function getPasajes(fecha, origen, destino) {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/pasajes/' + fecha + '/' + origen + '/' + destino
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }


    // Obtiene un pasaje de acuerdo a su Id
    function getPasaje(pasajeId) {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/pasaje/' + pasajeId
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

  }
