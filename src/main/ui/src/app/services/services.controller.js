(function() {
  'use strict';

  angular
    .module('ui')
    .controller('ServicesController', ServicesController);


  function ServicesController(webDevTec, uiGmapGoogleMapApi, $log) {
    var vm = this;
    vm.awesomeThings = webDevTec.getTec();
    vm.text = "Mallik"

    vm.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    uiGmapGoogleMapApi.then(function() {
      // $log.log(maps);

      vm.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8,
        marker: {
                  id:0,
                  coords: {
                      latitude: 35.027469,
                      longitude: -111.022753
                  },
                  options: {
                      icon: {
                          anchor: new google.maps.Point(36,36),
                          origin: new google.maps.Point(0,0),
                          scaledSize: new google.maps.Size(72,72),
                          url: 'assets/images/cluster1.png'
                      }
                  }
              }
      };
      $log.log("Maps loaded");
    });


  }
})();
