'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompanyDeleteCtrl
 * @description
 * # CompanyDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompanyDeleteCtrl',function (
  $scope,
  $routeParams,
  Company,
  $location
) {
  $scope.company = Company.one($routeParams.id).get().$object;
  $scope.deleteCompany = function() {
    $scope.company.remove().then(function() {
      $location.path('/companies');
    });
  };
  $scope.back = function() {
    $location.path('/company/' + $routeParams.id);
  };
  });
