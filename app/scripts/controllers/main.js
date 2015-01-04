'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homepageApp
 */
angular.module('homepageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
