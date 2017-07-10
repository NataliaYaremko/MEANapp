'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompaniesCtrl', function (
  	$scope, 
  	Company
  	) {
  $scope.companies = Company.getList().$object;
  });
