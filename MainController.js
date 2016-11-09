// Code goes here
(function() {

  var app = angular.module("GitHubViewer");

  var MainController = function($scope, $interval, $location) {

    $scope.search = function(name) {

      if (count) {
        $interval.cancel(count);
        $scope.countDown = null;
      }
      $location.path("/user/"+name);

    };
    var decrementCount = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1) {
        $scope.search($scope.userName);
      }
    };

    var count = null;

    var startCountDown = function() {
      count = $interval(decrementCount, 1000, $scope.countDown);
    };

    $scope.userName = 'angular';
    $scope.countDown = 5;
    startCountDown();
  }
  app.controller('MainController', MainController);

}());