'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:boletoListCtrl
 * @description
 * # boletoListCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('boletoListCtrl', boletoListCtrl);

  function boletoListCtrl($location,
                          boletoService,
                          SweetAlert) {

    var boletoListVm = this;
    boletoListVm.eliminarBoleto = eliminarBoleto;
    init();

    function init() {
      boletoService.getBoletos(2).then(function(results){
        boletoListVm.boletos = results;
      });
    }

    function eliminarBoleto(boletoId){

      SweetAlert.swal(SweetAlert.eliminar, // eliminar, inicializa la configuracion

        function (isConfirm) {
          if (isConfirm){
            boletoService.delBoleto(boletoId).then(function (resp) {
            SweetAlert.timed("Éxito!", resp.msg, "success", 2500);
            $location.url("/mis-boletos/");
          },
            function error(resp) {
              SweetAlert.swal("Ha ocurrido un error!", resp.msg, "error");
            });
          }
        }

      );

    }

  }
