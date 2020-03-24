'use strict';

/**
 * @ngdoc service
 * @name appApp.misBoletosService
 * @description
 * # misBoletosService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('misBoletosService', misBoletosService);

  function misBoletosService($resource){
    return $resource('http://localhost:1234/api/boletos/:id_usuario', {}, {
      query: {
        method: 'GET',
        params: {id_usuario: 2},
        isArray: true
      }
    });
  }
