'use strict';

describe('Directive: dropdown', function () {

  // load the directive's module
  beforeEach(module('accessibleDropdownApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<div dropdown></div>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should make hidden element visible', function () {
    expect(element.text()).to.equal('this is the dropdown directive');
  });
});
