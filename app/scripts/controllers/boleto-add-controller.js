'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BoletoAddCtrl
 * @description
 * # BoletoAddCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('BoletoAddCtrl', BoletoAddCtrl);

  function BoletoAddCtrl($routeParams,
                         $location,
                         pasajeService,
                         boletoService) {

    var boletoAddVm = this;
    boletoAddVm.crearBoleto = crearBoleto;
    init();

    // Carga el objeto Pasaje seleccionado por el usuario
    function init(){
      pasajeService.getPasaje($routeParams.pasajeId).then(function(results){
        boletoAddVm.pasaje = results;
      });
    }

    // Registra el boleto
    function crearBoleto(numeroAsientos, precioTotal) {
      // Crea una instancia de boleto
      boletoAddVm.boleto = {};
      boletoAddVm.boleto.numero_asientos = numeroAsientos;
      boletoAddVm.boleto.precio_total = precioTotal;
      boletoAddVm.boleto.user_id = 2;
      boletoAddVm.boleto.pasaje_id = boletoAddVm.pasaje.id;
      boletoService.addBoleto(boletoAddVm.boleto).then(function (resp) {
        $location.url("/mis-boletos/");
      },
      function error(resp) {
        console.log(resp);
      });
    }

  }
