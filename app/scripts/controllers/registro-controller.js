'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the appApp
 */

angular
  .module('appApp')
  .controller('RegistroCtrl', RegistroCtrl);

function RegistroCtrl($rootScope,
                      $location,
                      registroService,
                      grupoService,
                      SweetAlert) {

    var registroVm = this;
    registroVm.check_username = check_username;
    registroVm.check_email = check_email;
    registroVm.crearCuenta = crearCuenta;
    registroVm.cuenta = {};
    init();


    // funcion inicializadora encargada de cargar los grupos de acuerdo al tipo de usuario
    function init(){

      registroVm.grupos = {}
      if ($rootScope.usuarioActual){
        grupoService.cargarGrupos().then(function (resp) {
          registroVm.grupos = resp;
        },
        function error(resp) {
          SweetAlert.swal("Ha ocurrido un error!", resp, "error");
        });
      }

    }


    // Crear la cuenta
    function crearCuenta() {

      SweetAlert.wait('Creando usuario...','Por favor espera mientras se procesa la información',

        registroService.crearCuenta(registroVm.cuenta).then(function (resp) {
          SweetAlert.swal(resp.titulo, resp.msg, "success");
          $location.url("/");
        },
        function error(resp) {
          SweetAlert.swal(resp.titulo, resp.msg, "error");
        })

      );

    }


    // Verifica el username del nuevo registro
    function check_username(){

      registroVm.msgUsername = {};
      registroService.checkGenericUsernameEmail('/api/check-username/', registroVm.cuenta.username).then(function (resp) {
        registroVm.msgUsername.status = resp.status_username;
        registroVm.msgUsername.msg = resp.msg_username;
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp, "error");
      });

    }

    // Verifica el email del nuevo registro
    function check_email(){

      registroVm.msgEmail = {};
      registroService.checkGenericUsernameEmail('/api/check-email/', registroVm.cuenta.email).then(function (resp) {
        registroVm.msgEmail.status = resp.status_email;
        registroVm.msgEmail.msg = resp.msg_email;
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp, "error");
      });

    }
}
