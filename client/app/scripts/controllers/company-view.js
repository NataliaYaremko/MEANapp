'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompanyViewCtrl
 * @description
 * # CompanyViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompanyViewCtrl', function (
  $scope,
  $routeParams,
  Company
) {
  $scope.viewCompany = true;
  $scope.company = Company.one($routeParams.id).get().$object;
  });
