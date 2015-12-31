'use strict';

/**
 * @ngdoc directive
 * @name accessibleDropdownApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('accessibleDropdownApp')
  .directive('dropdown', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
        console.log(element);
        element.children().unbind('keydown');
        scope.applyFocus = function(event){
          if(event.keyCode === 40) {
            event.preventDefault();
            if(!scope.$select.open) {
              scope.$select.open = true;
            } else {
              if(scope.$select.activeIndex === scope.$select.items.length - 1) {
                scope.$select.activeIndex = 0;
              } else {
                scope.$select.activeIndex++;
              }
            }
          } else if(event.keyCode === 13) {
            event.preventDefault();
            scope.$select.select(scope.$select.items[scope.$select.activeIndex], false, event);
          } else if(event.keyCode === 9) {
            scope.$select.open = false;
            //angular.element(document).triggerHandler('keydown', {keyCode: 9});
          }
        };
      }
    };
  });
