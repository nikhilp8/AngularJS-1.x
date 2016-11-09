// Code goes here
(function() {

  var app = angular.module("GitHubViewer");

  var userController = function($scope,github,$routeParams) {
    $scope.message = "Github Viewer";
    
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos, error)
    };

    var onRepos = function(data) {
      $scope.repos = data;

      
    };

    var error = function(err) {
      $scope.error = "could not fetch data";
    };

    
    

   

    $scope.userName = $routeParams.username;
    $scope.stars = 'stargazers_count';
    github.getUser($scope.userName).then(onUserComplete,error);
    
    
  }
  app.controller('userController', userController);

}());