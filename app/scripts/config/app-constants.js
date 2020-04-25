'use strict';

angular
  .module('appApp.config')
  .constant('APP', {
    apiHost: 'http://localhost:1234',
    usuario: {
      administrador: 'Administrador',
      cooperativa: 'Cooperativa',
      cliente: 'Cliente',
    },
  });
