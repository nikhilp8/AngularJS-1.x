// Code goes here
(function() {

  var app = angular.module("GitHubViewer", []);

  var MainController = function($scope,$interval,$anchorScroll,$location,github) {
    $scope.message = "Github Viewer";
    
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos, error)
    };

    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();
      
    };

    var error = function(err) {
      $scope.error = "could not fetch data";
    };

    $scope.search = function(name) {
      github.getUser(name).then(onUserComplete, error)
        if(count){
          $interval.cancel(count);
          $scope.countDown = null;
        }
        
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
    $scope.stars = 'stargazers_count';
    $scope.countDown = 5;
    startCountDown();
  }
  app.controller('MainController', MainController);

}());