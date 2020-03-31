'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the appApp
 */

angular
  .module('appApp')
  .controller('LogoutCtrl', LogoutCtrl);

function LogoutCtrl($rootScope,
                   loginService,
                   $location) {

  logout();

  // logout de usuario
  function logout() {
    loginService.logout().then(function (resp) {
      $rootScope.usuarioActual = '';
      $location.url("/");
    }),
    function error(resp) {
      console.log(resp);
    };
  }
}
