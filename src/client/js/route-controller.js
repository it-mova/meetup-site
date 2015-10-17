angular.module('ngApp', ['ngRoute'])

    .controller('RouteController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                resolve : function() {
                    console.log(1);
                }
            })
    });
