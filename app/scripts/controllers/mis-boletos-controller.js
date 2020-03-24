'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MisBoletosCtrl
 * @description
 * # MisBoletosCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('MisBoletosCtrl', MisBoletosCtrl);

  function MisBoletosCtrl(misBoletosService){
    this.boletos = misBoletosService.query();
    this.orderProp = 'salida';
  }
