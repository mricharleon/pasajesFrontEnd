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

  function pasajeService($http, $q, APP){

    var service = {
      getAllPasajes: getAllPasajes,
      getPasajes: getPasajes,
      getPasaje: getPasaje,
      editPasaje: editPasaje,
      guardarPasaje: guardarPasaje,
    };

    return service;

    // Obtiene todos los pasajes
    function getAllPasajes() {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/all/pasajes'
      }).then(function success(res) {
        return res.data;
      }, function error(res) {
        return $q.reject(res.data);
      });
    }


    // Obtiene pasajes de acuerdo al criterio de busqueda
    function getPasajes(fecha, origen, destino) {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/pasajes/' + fecha + '/' + origen + '/' + destino,
      }).then(function success(res) {
        return res.data;
      }, function error(res) {
        return $q.reject(res);
      });
    }


    // Obtiene un pasaje de acuerdo a su Id
    function getPasaje(pasajeId) {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/pasaje/' + pasajeId
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

    // Crea el pasaje editado
    function editPasaje(data) {
      return $http({
        method: 'PUT',
        url: APP.apiHost + '/api/pasaje/' + data.id,
        data: data,
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

    // Crea el pasaje nuevo
    function guardarPasaje(data) {
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/pasaje',
        data: data,
      }).then(function success(resp) {
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

  }
