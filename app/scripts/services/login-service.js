'use strict';

/**
 * @ngdoc service
 * @name appApp.loginService
 * @description
 * # loginService
 * Service in the appApp.
 */
angular
  .module('appApp')
  .factory('loginService', loginService);

  function loginService($http,
                        $q,
                        APP) {

    var service = {
      login: login,
      logout: logout,
      setUsuarioLogueado: setUsuarioLogueado,
      deleteUsuarioLogueado: deleteUsuarioLogueado,
    };

    return service;

    // Login
    function login(login, password) {
      return $http({
        method: 'POST',
        url: APP.apiHost + '/api/login',
        data: JSON.stringify({'login':login, 'password':password}),
      }).then(function success(resp) {
        setUsuarioLogueado(resp.data);
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });

    }

    // Setea el usuario en localStorage
    function setUsuarioLogueado(resp) {
      localStorage.setItem('actualUsuario', JSON.stringify(resp));
    }

    // Elimina el usuario en localStorage
    function deleteUsuarioLogueado() {
      localStorage.removeItem('actualUsuario');
      localStorage.removeItem('menu');
    }

    // Logout
    function logout() {
      return $http({
        method: 'GET',
        url: APP.apiHost + '/api/logout',
      }).then(function success(resp) {
        deleteUsuarioLogueado();
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });

    }

  }
