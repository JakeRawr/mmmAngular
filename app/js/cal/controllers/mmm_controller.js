'use strict';
module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'mmmCall', function($scope, $http, mmmCall) {
    $scope.calMMM = function() {
      var splitArray = $scope.numbers.split(' ').join();
      var numberArray = JSON.parse('[' + splitArray + ']');
      console.log(numberArray);
      mmmCall.calculate(numberArray)
      .success(function(data) {
        $scope.results = data;
      });
    };
    setInterval(function() {
      $scope.calMMM();
    }, 50);
  }]);
};
