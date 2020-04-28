'use strict';

angular.module("appApp.config").constant("APP", {
  apiHost: "https://pasajes-backend.herokuapp.com",
  usuario: {
    administrador: "Administrador",
    cooperativa: "Cooperativa",
    cliente: "Cliente",
  },
});
