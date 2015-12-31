'use strict';

/**
 * @ngdoc directive
 * @name accessibleDropdownApp.directive:test
 * @description
 * # test
 */
angular.module('accessibleDropdownApp')
  .directive('test', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the test directive');
      }
    };
  });
