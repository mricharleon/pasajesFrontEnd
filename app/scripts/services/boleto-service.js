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


  function boletoService($http, $q){

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
        url: 'http://localhost:1234/' + '/api/boletos/' + usuarioId
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
        url: 'http://localhost:1234/' + '/api/boletos',
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
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
        url: 'http://localhost:1234/' + '/api/boleto/' + boletoId,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function success(res) {
        return res.data // jshint ignore:line
      }, function error(res) {
        return $q.reject(res.data);
      });
    }

  }
