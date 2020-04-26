'use strict';

/**
 * @ngdoc service
 * @name appApp.cooperativaService
 * @description
 * # cooperativaService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('cooperativaService', cooperativaService);


function cooperativaService($http,
                            $q,
                            APP) {

  var service = {
    crearCooperativa: crearCooperativa,
  };

  return service;


  function crearCooperativa(cooperativa) {

    return $http({
      method: 'POST',
      url: APP.apiHost + '/api/add-cooperativas',
      data: cooperativa
    }).then(function success(resp) {
      return resp.data;
    },
    function error(resp) {
      return $q.reject(resp.data);
    });

  }

}
