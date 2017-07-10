'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompanyEditCtrl
 * @description
 * # CompanyEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompanyEditCtrl', function (
  $scope,
  $routeParams,
  Company,
  $location
) {
  $scope.editCompany = true;
  $scope.company = {};
  Company.one($routeParams.id).get().then(function(company) {
    $scope.company = company;
    $scope.saveCompany = function() {
      $scope.company.save().then(function() {
        $location.path('/company/' + $routeParams.id);
      });
    };
  });
  });
