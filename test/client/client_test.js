'use strict';

require('./../../app/js/client');
require('angular-mocks');

describe('app controllers', function() {
  var $controllerConstructor;
  var $scope;
  var $httpBackend;

  beforeEach(angular.mock.module('calApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should create a mmmCtrl', function() {
    var calController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof calController).toBe('object');
  });

  describe('REST tests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_){
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should post to the server', function() {
      $httpBackend.expectPOST('/calMMM').respond(200, ['mean: ' + 2 + ' mode: ' + 2 + ' median ' + 2]);

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.numbers = '1 2 3 2';
      $scope.calMMM();
      $httpBackend.flush();

      expect(typeof $scope.results).toBe('object');
    });
  });
});

