'use strict';

module.exports = function(app) {
  var handleErrors = function(data) {
    console.log(data);
  };

  app.factory('mmmCall', ['$http', function($http) {
    return {
      calculate: function(numberArray) {
        return $http.post('/calMMM', { list: numberArray })
        .error(handleErrors);
      }
    };
  }]);
};
