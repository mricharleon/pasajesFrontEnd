'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ActivarCtrl
 * @description
 * # ActivarCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('ActivarCtrl', ActivarCtrl);

function ActivarCtrl($routeParams,
                     $route,
                     registroService,
                     loginService,
                     SweetAlert,
                     $location) {

  activar();

  function activar() {

    let cod_verificacion = $routeParams.cod_verificacion;
    registroService.activar(cod_verificacion).then(function (resp) {
      SweetAlert.timed('Cuenta activada!', '', "success", 2500);
      loginService.setUsuarioLogueado(resp);
      $route.reload();
      $location.url("/inicio/");
    },
    function error(resp) {
      SweetAlert.error(resp.titulo, resp.msg);
      if ( JSON.parse(localStorage.getItem('actualUsuario')) ){
        $location.url("/inicio/");
      }else{
        $location.url("/");
      }
    });
  }

}
