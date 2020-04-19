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

function RegistroCtrl(registroService,
                      SweetAlert) {

    var registroVm = this;
    registroVm.check_username = check_username;
    registroVm.check_email = check_email;


    // Verifica el username del nuevo registro
    function check_username(){

      registroVm.msgUsername = {};
      registroService.check_generic_username_email('/api/check-username/', registroVm.username).then(function (resp) {
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
      registroService.check_generic_username_email('/api/check-email/', registroVm.email).then(function (resp) {
        registroVm.msgEmail.status = resp.status_email;
        registroVm.msgEmail.msg = resp.msg_email;
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp, "error");
      });

    }
}
