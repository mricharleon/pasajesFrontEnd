'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PasajeEditCtrl
 * @description
 * # PasajeEditCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('PasajeEditCtrl', PasajeEditCtrl);

  function PasajeEditCtrl($filter,
                          $location,
                          $routeParams,
                          pasajeService,
                          sitioService,
                          unidadService){

    var pasajeEditVm = this;
    pasajeEditVm.guardarPasajeEditado = guardarPasajeEditado;
    init();

    function init() {
      inicializaPasaje();
      inicializaSitios();
      inicializaUnidades();
    }

    // Guarda el objeto pasaje con los valores editados
    function guardarPasajeEditado() {
      pasajeService.editPasaje(pasajeEditVm.pasaje).then(function(){
        $location.url("/list-pasajes/");
      },
      function error(resp) {
        console.log(resp);
      });
    }

    // Carga el objeto Pasaje seleccionado por el usuario
    function inicializaPasaje(){
      pasajeService.getPasaje($routeParams.pasajeId).then(function(resp){
        pasajeEditVm.pasaje = resp;
      });
    }

    // Carga los sitios disponibles
    function inicializaSitios(){
      sitioService.getSitios().then(function(resp){
        pasajeEditVm.sitios = resp;
      });
    }

    // Carga las unidades disponibles
    function inicializaUnidades(){
      unidadService.getUnidades().then(function(resp){
        pasajeEditVm.unidades = resp;
      });
    }

  }
