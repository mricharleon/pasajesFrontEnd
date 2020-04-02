'use strict';

angular
  .module('appApp')
  .config(requestsOverwrite);

  function requestsOverwrite($httpProvider) {
    $httpProvider.interceptors.push('interceptorsService');
  }
