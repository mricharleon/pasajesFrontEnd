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
                      $rootScope, $route,
                      pasajeService,
                      sitioService,
                      loginService) {

    var pasajeVm = this;
    pasajeVm.buscarPasajes = buscarPasajes;
    pasajeVm.comprarPasaje = comprarPasaje;
    init();

    // Inicializador
    function init() {
      getSitios();
    }

    // Obtiene los objetos sitios
    function getSitios() {
      sitioService.getSitios().then(function(resp){
        pasajeVm.sitios = resp;
      });
    }

    // Obtiene los pasajes que concuerden con la fecha, origen y destino
    function buscarPasajes(fecha, origen, destino) {
      let date = $filter('date')(new Date(fecha), "yyyy-MM-dd");
      pasajeService.getPasajes(date, origen, destino).then(function(results){
        pasajeVm.pasajes = results;
        $route.reload();
      });
    }

    // Redirecciona al siguiente paso para la creación de un boleto
    function comprarPasaje(pasaje) {
      $location.url("/crear-boleto/").search({pasajeId: pasaje.id});
    }

  }
