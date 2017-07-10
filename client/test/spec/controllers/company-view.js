'use strict';

describe('Controller: CompanyViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CompanyViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyViewCtrl = $controller('CompanyViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyViewCtrl.awesomeThings.length).toBe(3);
  });
});
