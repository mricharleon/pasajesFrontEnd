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
                          pasajeService,
                          SweetAlert){

    var pasajeListVm = this;
    pasajeListVm.editarPasaje = editarPasaje;
    init();

    // Inicializador
    function init() {
      get_pasajes();
      pasajeListVm.currentDate = new Date();
    }

    // Obtiene los objetos sitios
    function get_pasajes() {
      pasajeService.getAllPasajes().then(function(resp){
        pasajeListVm.pasajes = resp;
      },
        function error(resp) {
          SweetAlert.swal("Ha ocurrido un error!", resp.msg, "error");
        });
    }

    // Redirecciona al formulario para editar el pasaje
    function editarPasaje(pasajeId){
      $location.url("/edit-pasaje/").search({pasajeId: pasajeId});
    }

  }
