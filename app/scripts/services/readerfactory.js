'use strict';

/**
 * @ngdoc service
 * @name homepageApp.readerFactory
 * @description
 * # readerFactory
 * Factory in the homepageApp.
 */
angular.module('homepageApp')
  .factory('readerFactory', function () {
    // Service logic
    // ...

    var panelLayout = {
      columns: [
        [
          {
            url: 'http://feeds.feedburner.com/ycombinator/fJpl',
            num: 5
          },
          {
            url: 'http://feeds.feedburner.com/SlickdealsnetFP',
            num: 4
          }
        ],
        [
          {
            url: 'http://rss.cnn.com/rss/cnn_topstories.rss',
            num: 3
          },
          {
            url: 'http://feeds.fool.com/usmf/foolwatch',
            num: 3
          },
          {
            url: 'http://rss.cnn.com/rss/money_latest.rss',
            num: 3
          }
        ],
        [
          {
            url: 'https://medium.com/feed/frontpage-picks',
            num: 3
          },
          {
            url: 'https://medium.com/feed/tech-talk',
            num: 3
          },
          {
            url: 'https://lobste.rs/rss',
            num: 3
          }
        ]
      ]
    };

    // Public API here
    return {
      loadReader: function () {
        return panelLayout;
      }
    };
  });
