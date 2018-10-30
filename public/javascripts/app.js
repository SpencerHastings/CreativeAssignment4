var app = window.angular.module('app', [])

app.factory('restaurantFetcher', restaurantFetcher)
app.controller('mainCtrl', mainCtrl)

function restaurantFetcher($http) {

    var API_ROOT = 'restaurant'
    return {
        get: function() {
            return $http
                .get(API_ROOT)
                .then(function(resp) {
                    return resp.data
                })
        },
    };
}

function mainCtrl($scope, restaurantFetcher, $http) {

    $scope.posts = [];

    $scope.addPost = function() {
        var formData = { name: $scope.Name, post: $scope.PostText };
        var restaurant = $scope.selector;
        console.log(formData);
        var restaurantURL = 'restaurant?q=' + restaurant;
        $http({
            url: restaurantURL,
            method: "POST",
            data: formData
        }).success(function(data, status, headers, config) {
            console.log("Post worked");
        }).error(function(data, status, headers, config) {
            console.log("Post failed");
        });
    };

    restaurantFetcher.get()
        .then(function(data) {
            $scope.posts = data;
        });
}
