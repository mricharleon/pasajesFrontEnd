'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular
  .module('appApp')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $filter, pasajesService, sitioService) {

    initPasaje();

    function initPasaje() {
      get_sitios();
    }


    function get_sitios() {
      $scope.sitios = sitioService.query();
    }

    // $scope.ciudades = {
    //   model: null,
    //   availableOptions: [
    //     {id: 'Loja', name: 'Loja'},
    //     {id: 'Cuenca', name: 'Cuenca'},
    //     {id: 'Quito', name: 'Quito'},
    //     {id: 'Guayaquil', name: 'Guayaquil'}
    //   ]
    // };

    $scope.buscarPasajes = function(fecha, origen, destino) {
      let date = $filter('date')(new Date(fecha), "yyyy-MM-dd");
      $scope.pasajes = pasajesService.query({ fecha:date, origen:origen, destino:destino });
    };

    // $scope.myDate = '';

    // $scope.$watch('myDate', function(newVal) {
    //   if (!newVal) {
    //     return false;
    //   }
    //   var date = $filter('date')(new Date(newVal), "yyyy-MM-dd");
    // });

  }
