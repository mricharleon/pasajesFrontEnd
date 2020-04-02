'use strict';

angular
  .module('appApp')
  .config(requestsOverwrite);

  function requestsOverwrite($httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('interceptorsService');

  }
