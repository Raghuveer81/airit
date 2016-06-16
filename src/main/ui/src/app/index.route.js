(function() {
  'use strict';

  angular
    .module('ui')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      }).state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
