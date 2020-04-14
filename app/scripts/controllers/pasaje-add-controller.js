'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PasajeAddCtrl
 * @description
 * # PasajeAddCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('PasajeAddCtrl', PasajeAddCtrl);

  function PasajeAddCtrl($location,
                          $routeParams,
                          pasajeService,
                          sitioService,
                          unidadService,
                          SweetAlert){

    var pasajeAddVm = this;
    pasajeAddVm.guardarPasaje = guardarPasaje;
    pasajeAddVm.pasaje = {};
    init();

    function init() {
      inicializaSitios();
      inicializaUnidades();
    }

    // Guarda el objeto pasaje con los valores editados
    function guardarPasaje() {

      // Crea una instancia de pasaje
      pasajeAddVm.pasaje.origen_id = pasajeAddVm.pasaje.origen.id;
      pasajeAddVm.pasaje.destino_id = pasajeAddVm.pasaje.destino.id;
      pasajeAddVm.pasaje.unidad_id = pasajeAddVm.pasaje.unidad.id;

      pasajeService.guardarPasaje(pasajeAddVm.pasaje).then(function(resp){
        SweetAlert.timed("Éxito!", resp.msg, "success", 2500);
        $location.url("/list-pasajes/");
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp.msg, "error");
      });
    }

    // Carga los sitios disponibles
    function inicializaSitios(){
      sitioService.getSitios().then(function(resp){
        pasajeAddVm.sitios = resp;
      });
    }

    // Carga las unidades disponibles
    function inicializaUnidades(){
      unidadService.getUnidades().then(function(resp){
        pasajeAddVm.unidades = resp;
      });
    }

  }
