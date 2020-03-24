'use strict';

/**
 * @ngdoc service
 * @name appApp.pasajesService
 * @description
 * # pasajesService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('pasajesService', pasajesService);

  function pasajesService($resource){
    return $resource('http://localhost:1234/api/pasajes/:fecha/:origen/:destino', {}, {
      query: {
        method: 'GET',
        params: {fecha:'@fecha',
                 origen:'@origen',
                 destino:'@destino'},
        isArray: true
      }
    });
  }
