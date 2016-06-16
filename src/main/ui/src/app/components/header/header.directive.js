(function() {
  'use strict';

  angular
    .module('ui')
    .directive('airHeader', airHeader);

  /** @ngInject */
  function airHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {
          creationDate: '='
      },
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
