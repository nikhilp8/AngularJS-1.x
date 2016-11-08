(function(){
  
  var github = function($http){
      var getUser = function(name){
        return $http.get("https://api.github.com/users/" + name)
                    .then(function(response){
                      return response.data;
                    });
      };
      
      var getRepos = function(user){
        return $http.get(user.repos_url)
                    .then(function(response){
                      return response.data;
                    });
      };
  
    return {
      getUser:getUser,
      getRepos:getRepos
    };
  };
  
  var module = angular.module("GitHubViewer");
  module.factory("github",github)
}());