'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PasajeCtrl
 * @description
 * # PasajeCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('PasajeCtrl', PasajeCtrl);

  function PasajeCtrl($filter,
                      $location,
                      $rootScope,
                      pasajeService,
                      sitioService,
                      menuService,
                      SweetAlert) {

    var pasajeVm = this;
    pasajeVm.buscarPasajes = buscarPasajes;
    pasajeVm.comprarPasaje = comprarPasaje;
    init();

    // Inicializador
    function init() {
      getSitios();
      getMenu();
    }

    // Obtiene el menu del usuario logueado
    function getMenu() {
      menuService.getMenu().then(function (resp) {
        $rootScope.menu = resp;
        $rootScope.states = {};
        $rootScope.states.activeItem = resp[0].id;
      });
    }

    // Obtiene los objetos sitios
    function getSitios() {
      sitioService.getSitios().then(function(resp){
        pasajeVm.sitios = resp;
      });
    }

    // Obtiene los pasajes que concuerden con la fecha, origen y destino
    function buscarPasajes(fecha, origen, destino) {
      pasajeVm.date = $filter('date')(new Date(fecha), "yyyy-MM-dd");
      pasajeService.getPasajes(pasajeVm.date, origen, destino).then(function(resp){
        pasajeVm.pasajes = resp;
        if (pasajeVm.pasajes.msg){ // si no se encontraron resultados
          SweetAlert.timed("Ups!", resp.msg, "info", 2500);
        }
      },
      function error(resp) {
        SweetAlert.swal("Ha ocurrido un error!", resp.msg, "error");
      });
    }

    // Redirecciona al siguiente paso para la creación de un boleto
    function comprarPasaje(pasaje) {
      $location.url("/crear-boleto/").search({pasajeId: pasaje.id});
    }

  }
