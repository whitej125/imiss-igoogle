'use strict';

/**
 * @ngdoc overview
 * @name homepageApp
 * @description
 * # homepageApp
 *
 * Main module of the application.
 */
angular
  .module('homepageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/reader.html',
        controller: 'ReaderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
