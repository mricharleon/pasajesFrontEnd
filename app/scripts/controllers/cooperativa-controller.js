'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:CooperativaAddCtrl
 * @description
 * # CooperativaAddCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('CooperativaAddCtrl', CooperativaAddCtrl);


function CooperativaAddCtrl($location,
                            cooperativaService,
                            SweetAlert) {

  var cooperativaAddVm = this;
  cooperativaAddVm.crearCooperativa = crearCooperativa;
  cooperativaAddVm.cooperativa = {};


  function crearCooperativa() {

    cooperativaService.crearCooperativa(cooperativaAddVm.cooperativa).then(function (resp) {
      SweetAlert.timed(resp.titulo, resp.msg, "success", 2500);
      $location.url("/list-pasajes/");
    },
    function error(resp) {
      SweetAlert.error(resp.titulo, resp.msg);
    });

  }

}
