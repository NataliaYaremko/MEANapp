'use strict';

describe('Controller: CompanyEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CompanyEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyEditCtrl = $controller('CompanyEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyEditCtrl.awesomeThings.length).toBe(3);
  });
});
