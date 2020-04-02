'use strict';

/**
 * @ngdoc service
 * @name appApp.boletoService
 * @description
 * # boletoService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('boletoService', boletoService);


  function boletoService($http, $q, APP){

    var service = {
      getBoletos: getBoletos,
      addBoleto: addBoleto,
      delBoleto: delBoleto,
    };

    return service;


    // Obtiene todos los boletos de un usuario
    function getBoletos(usuarioId) {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/boletos/' + usuarioId
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

    // Crea el boleto creado por el usuario
    function addBoleto(data) {
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/boletos',
        data: data,
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

    // Elimina el boleto
    function delBoleto(boletoId) {
      return $http({
        method: 'DELETE',
        url: APP.apiHost + '/api/boleto/' + boletoId,
      }).then(function success(resp) {
        return resp.data // jshint ignore:line
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

  }
