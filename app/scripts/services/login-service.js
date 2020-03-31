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
  .service('loginService', loginService);

  function loginService($http,
                        $q) {

    var service = {
      login: login,
      logout: logout,
      setUsuarioLogueado: setUsuarioLogueado,
      getUsuarioLogueado: getUsuarioLogueado,
      deleteUsuarioLogueado: deleteUsuarioLogueado,
    };

    return service;

    // Login
    function login(login, password) {
      return $http({
        method: 'POST',
        url: 'http://localhost:1234/' + '/api/login',
        data: JSON.stringify({'login':login, 'password':password}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(function success(resp) {
        setUsuarioLogueado(resp.data);
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });

    }

    // Setea el usuario en localStorage
    function setUsuarioLogueado(usuario) {
      localStorage.setItem('actualUsuario', JSON.stringify(usuario));
    }

    // extrae el usuario de localStorage
    function getUsuarioLogueado() {
      return JSON.parse(localStorage.getItem('actualUsuario'));
    }

    // Elimina el usuario en localStorage
    function deleteUsuarioLogueado() {
      localStorage.removeItem('actualUsuario');
    }

    // Logout
    function logout() {
      return $http({
        method: 'GET',
        url: 'http://localhost:1234/' + '/api/logout',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(function success(resp) {
        deleteUsuarioLogueado();
        return resp.data;
      }, function error(resp) {
        return $q.reject(resp.data);
      });

    }

  }
