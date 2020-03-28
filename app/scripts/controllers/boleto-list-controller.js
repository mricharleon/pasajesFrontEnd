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

  function boletoListCtrl(boletoService) {

    var boletoListVm = this;
    init();

    function init() {
      boletoService.getBoletos(2).then(function(results){
        boletoListVm.boletos = results;
      });
    }

  }
