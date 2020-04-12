'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appApp
 */

angular
  .module('appApp')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($route,
                   loginService,
                   $location,
                   SweetAlert) {

    var loginVm = this;
    loginVm.login = login;

    // Login de usuario
    function login(){
      loginService.login(loginVm.usuario, loginVm.password).then(function(resp){
        $route.reload();
        $location.url("/inicio/");
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp, "error");
      });
    }
  }
