'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/companies', {
        templateUrl: 'views/companies.html',
        controller: 'CompaniesCtrl' 
      })
      .when('/create/company', {
        templateUrl: 'views/company-add.html',
        controller: 'CompanyAddCtrl'
      })
      .when('/company/:id', {
        templateUrl: 'views/company-view.html',
        controller: 'CompanyViewCtrl'
      })
      .when('/company/:id/delete', {
        templateUrl: 'views/company-delete.html',
        controller: 'CompanyDeleteCtrl'
      })
      .when('/company/:id/edit', {
        templateUrl: 'views/company-edit.html',
        controller: 'CompanyEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('CompanyRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Company', function(CompanyRestangular) {
    return CompanyRestangular.service('company');
  });