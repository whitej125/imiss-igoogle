'use strict';

/**
 * @ngdoc service
 * @name homepageApp.feedFactory
 * @description
 * # feedFactory
 * Factory in the homepageApp.
 */
angular.module('homepageApp')
  .factory('feedFactory', ['$http', function($http) {
    return {
      // define a function to fetch the contents of a feed
      loadFeed: function(url, max, callback) {
        $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load',
          { 
            params: {
              v: '1.0',
              q: url,
              num: max,
              callback: 'JSON_CALLBACK'
            }
          })
          .success(function(data) {
            callback(null, data);
          })
          .error(function(e) {
            callback(e);
          });
      }
    };
  }]);
