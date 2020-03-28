'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PasajeListCtrl
 * @description
 * # PasajeListCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('PasajeListCtrl', PasajeListCtrl);

  function PasajeListCtrl($location,
                          pasajeService){

    var pasajeListVm = this;
    pasajeListVm.editarPasaje = editarPasaje;
    init();

    // Inicializador
    function init() {
      get_pasajes();
    }

    // Obtiene los objetos sitios
    function get_pasajes() {
      pasajeService.getAllPasajes().then(function(resp){
        pasajeListVm.pasajes = resp;
      });
    }

    // Redirecciona al formulario para editar el pasaje
    function editarPasaje(pasajeId){
      $location.url("/edit-pasaje/").search({pasajeId: pasajeId});
    }

  }
