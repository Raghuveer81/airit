(function() {
  'use strict';

  angular
    .module('ui')
    .controller('AboutController', AboutController);


  function AboutController() {
    var vm = this;
    vm.text = "Mallik"
  }
})();
