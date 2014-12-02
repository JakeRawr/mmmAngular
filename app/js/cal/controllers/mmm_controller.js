'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.calMMM = function() {
      var splitArray = $scope.numbers.split(' ').join();
      var numberArray = JSON.parse('[' + splitArray + ']');
      console.log(numberArray);
      $http.post('/calMMM', {list:numberArray})
      .success(function(data) {
        $scope.results = data;
      })
      .error(function(data) {
        console.log(data);
      });
    };

    setInterval(function() {
      $scope.calMMM();
    }, 50);

  }]);
};
