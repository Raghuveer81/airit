(function() {
  'use strict';

  angular
    .module('ui')
    .controller('ServicesController', ServicesController);


  function ServicesController(webDevTec, uiGmapGoogleMapApi, $log, uiGmapIsReady) {
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

    uiGmapIsReady.promise(1).then(function(instances) {
      $log.log('length of maps: ',instances.length);
        instances.forEach(function(inst) {
            var map = inst.map;
            var uuid = map.uiGmap_id;
            var mapInstanceNumber = inst.instance; // Starts at 1.
              $log.log(uuid, mapInstanceNumber)
        });
    });

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
                      latitude: 45,
                      longitude: -73
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
