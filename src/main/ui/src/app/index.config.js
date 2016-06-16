(function() {
  'use strict';

  angular
    .module('ui')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, uiGmapGoogleMapApiProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAZuqgtMA-SSk7XPaOkPMGobO-I98B386E',
      libraries: 'weather,geometry,visualization'
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
