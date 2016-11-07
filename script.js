// Code goes here
(function() {

  var app = angular.module("GitHubViewer", []);

  var MainController = function($scope, $http) {
    $scope.message = "Github Viewer";

    var person = {
      name: "plunker",
      age: "8"
    };

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, error)
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    }

    var error = function(err) {
      $scope.error = "could not fetch data";
    }

    $scope.search = function(userName) {
      $http.get("https://api.github.com/users/" + userName)
        .then(onUserComplete, error)
    }

    $scope.person = person;
    $scope.stars = 'stargazers_count'
  }
  app.controller('MainController', MainController);

}());