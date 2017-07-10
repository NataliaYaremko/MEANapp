'use strict';

describe('Controller: CompanyAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CompanyAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyAddCtrl = $controller('CompanyAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompanyAddCtrl.awesomeThings.length).toBe(3);
  });
});
