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
                          boletoService) {

    var boletoListVm = this;
    boletoListVm.eliminarBoleto = eliminarBoleto;
    init();

    function init() {
      boletoService.getBoletos(2).then(function(results){
        boletoListVm.boletos = results;
      });
    }

    function eliminarBoleto(boletoId){
      boletoService.delBoleto(boletoId).then(function (resp) {
        $location.url("/mis-boletos/");
      },
      function error(resp) {
        console.log(resp);
      });
    }

  }
