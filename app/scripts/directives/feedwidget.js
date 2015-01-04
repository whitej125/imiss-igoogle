'use strict';

/**
 * @ngdoc directive
 * @name homepageApp.directive:feedWidget
 * @description
 * # feedWidget
 */
angular.module('homepageApp')
  .directive('feedWidget', ['feedFactory', function (feedFactory) {
    return {
      templateUrl: 'views/partials/feedWidget.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        feedFactory.loadFeed(attrs.url, attrs.num, function(error, data) {
          if(!error) {
            scope.feed = data.responseData.feed;
          }
        });
      }
    };
  }]);
