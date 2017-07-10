'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompanyAddCtrl
 * @description
 * # CompanyAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompanyAddCtrl', function (
  $scope,
  Company,
  $location
) {
  $scope.company = {};
  $scope.saveCompany = function() {
    Company.post($scope.company).then(function() {
      $location.path('/companies');
    });
  };
  });
