'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:datetimepicker
 * @description
 * # datetimepicker
 */
angular
  .module('appApp')
  .directive('datetimepicker', function ($filter) {
    return {
      require: '?ngModel',
      restrict: 'A',

      link: function(scope, element, attrs, ngModel){
        // Comprueba si existe el ngModel
        if(!ngModel) return;

        // Asigna value al input
        ngModel.$render = function(){
          var fechaParseada = $filter('date')(new Date(ngModel.$viewValue), "yyyy/MM/dd h:mm a");
          element.find('input').val( fechaParseada || '' );
        };

        // Configuracion del datetimepicker
        element.datetimepicker({
          locale: 'es',
        });

        // Detecta cambios en el input
        element.on('dp.change', function(){
          scope.$apply(leer);
        });

        leer();

        function leer() {
          // Recupera y formatea la fecha del input
          var value = element.find('input').val();
          value = $filter('date')(new Date(value), "yyyy-MM-ddTHH:mm");
          // Asigna el valor del input al ngModel
          ngModel.$setViewValue(value);
        }
      }

    };
  });
