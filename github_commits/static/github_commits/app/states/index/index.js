var app = angular.module('app');


var randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.controller('MainCtrl', function($scope, $http) {

    window.h = $http;
    window.s = $scope;

    $scope.getCommit = function(repoUrl) {
        $http.get(repoUrl + '/commits').then(function(response) {
            $scope.commit = response.data[randInt(0, response.data.length - 1)];
        });
    };

    $scope.getRandomCommit = function() {
        $http.get(window.api_url + '/repositories?since=' + randInt(0, 9999)).then(function(response) {
            $scope.repos = response.data;
            var repoUrl = $scope.repos[randInt(0, $scope.repos.length - 1)].url;
            $scope.getCommit(repoUrl);
        });
    };

    $scope.getRandomCommit();
});
