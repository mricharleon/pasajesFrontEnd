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
      getDateTime();
    }

    // Guarda el objeto pasaje con los valores editados
    function guardarPasajeEditado() {
      console.log(pasajeEditVm.pasaje)
      // pasajeService.editPasaje().then(function(resp){
      // });
    }

    // Carga el objeto Pasaje seleccionado por el usuario
    function inicializaPasaje(){
      pasajeService.getPasaje($routeParams.pasajeId).then(function(resp){
        pasajeEditVm.pasaje = resp;
        pasajeEditVm.pasaje.salida = new Date ($filter('date')(new Date(pasajeEditVm.pasaje.salida), "yyyy-MM-ddTHH:mm"));
        pasajeEditVm.pasaje.llegada = new Date ($filter('date')(new Date(pasajeEditVm.pasaje.llegada), "yyyy-MM-ddTHH:mm"));
      });
    }

    // Variables que contienen fecha y hora separado
    function separarDatetime(pasaje){
      pasajeEditVm.salida = {};
      pasajeEditVm.llegada = {};
      pasajeEditVm.salida.fecha = $filter('date')(new Date(pasaje.salida), "yyyy-MM-dd");
      pasajeEditVm.salida.hora = $filter('date')(new Date(pasaje.salida), "HH:mm");
      pasajeEditVm.llegada.fecha = $filter('date')(new Date(pasaje.llegada), "yyyy-MM-dd");
      pasajeEditVm.llegada.hora = $filter('date')(new Date(pasaje.llegada), "HH:mm");
    }

    // Carga la fecha actual en el formulario
    function getDateTime() {
      pasajeEditVm.fechaActual = moment().format('YYYY-MM-DD');
      pasajeEditVm.horaActual = moment().format('HH:mm');
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
