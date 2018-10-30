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

function mainCtrl($scope, restaurantFetcher, $http, $window) {

    $scope.posts = [];
    $scope.availableOptions = [
        { value: 'mcdonalds', name: 'McDonalds' },
        { value: 'caferio', name: 'Cafe Rio' },
        { value: 'cheesecake', name: 'Cheesecake Factory' }
    ];
    $scope.starOptions = [
        '\u2606\u2606\u2606\u2606\u2606',
        '\u2605\u2606\u2606\u2606\u2606',
        '\u2605\u2605\u2606\u2606\u2606',
        '\u2605\u2605\u2605\u2606\u2606',
        '\u2605\u2605\u2605\u2605\u2606',
        '\u2605\u2605\u2605\u2605\u2605',
        
    ];
    $scope.restaurantSelect = $scope.availableOptions[0];
    $scope.addPost = function() {
        var formData = { name: $scope.Name, post: $scope.PostText };
        var restaurant = $scope.restaurantSelect.value;
        console.log(formData);
        console.log(restaurant);
        var restaurantURL = 'restaurant?q=' + restaurant;
        $http({
            url: restaurantURL,
            method: "POST",
            data: formData
        }).success(function(data, status, headers, config) {
            console.log("Post worked");
            $window.location.reload();
        }).error(function(data, status, headers, config) {
            console.log("Post failed");
        });
        
    };

    restaurantFetcher.get()
        .then(function(data) {
            $scope.posts = data;
        });
}
