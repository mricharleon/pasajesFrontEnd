'use strict';

/**
 * @ngdoc service
 * @name appApp.menuService
 * @description
 * # menuService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .service('menuService', menuService);

  function menuService($http,
                        $q,
                        APP){

    var service = {
      getMenu: getMenu,
      setMenu: setMenu,
    };

    return service;

    // Obtiene el menu para el usuario logueado
    function getMenu() {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/menu',
      }).then(function success(resp) {
        setMenu(resp.data);
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });
    }

    // Setea el menu en localStorage
    function setMenu(resp) {
      localStorage.setItem('menu', JSON.stringify(resp));
    }

  }
