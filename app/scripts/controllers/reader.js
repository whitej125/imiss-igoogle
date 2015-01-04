'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:ReaderCtrl
 * @description
 * # ReaderCtrl
 * Controller of the homepageApp
 */
angular.module('homepageApp')
  .controller('ReaderCtrl', ['$scope', function ($scope) {
    $scope.feed = {
      title: '',
      entries: []
    };
  }]);
