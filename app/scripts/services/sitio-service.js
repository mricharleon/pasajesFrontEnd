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

  function sitioService($resource){
    return $resource('http://localhost:1234/api/sitios', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      }
    });
  }
