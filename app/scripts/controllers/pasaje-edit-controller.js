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

  function PasajeEditCtrl($location,
                          $routeParams,
                          pasajeService,
                          sitioService,
                          unidadService,
                          SweetAlert){

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
      // Crea una instancia de pasaje
      pasajeEditVm.pasajeEditado = {};
      pasajeEditVm.pasajeEditado.id = pasajeEditVm.pasaje.id;
      pasajeEditVm.pasajeEditado.salida = pasajeEditVm.pasaje.salida;
      pasajeEditVm.pasajeEditado.llegada = pasajeEditVm.pasaje.llegada;
      pasajeEditVm.pasajeEditado.precio = pasajeEditVm.pasaje.precio;
      pasajeEditVm.pasajeEditado.asientos_disponibles = pasajeEditVm.pasaje.asientos_disponibles;
      pasajeEditVm.pasajeEditado.origen_id = pasajeEditVm.pasaje.origen.id;
      pasajeEditVm.pasajeEditado.destino_id = pasajeEditVm.pasaje.destino.id;
      pasajeEditVm.pasajeEditado.unidad_id = pasajeEditVm.pasaje.unidad.id;
      pasajeService.editPasaje(pasajeEditVm.pasajeEditado).then(function(resp){
        SweetAlert.timed("Éxito!", resp.msg, "success", 2500);
        $location.url("/list-pasajes/");
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp.msg, "error");
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
