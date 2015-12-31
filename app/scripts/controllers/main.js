'use strict';

/**
 * @ngdoc function
 * @name accessibleDropdownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accessibleDropdownApp
 */
angular.module('accessibleDropdownApp')
  .controller('MainCtrl', function ($scope) {
    var self = this;
    self.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.itemArray = [
      {id: 1, name: 'first'},
      {id: 2, name: 'second'},
      {id: 3, name: 'third'},
      {id: 4, name: 'fourth'},
      {id: 5, name: 'fifth'},
    ];

    $scope.selectedItem= $scope.itemArray[0];
  });
