angular.module('ohmbru', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',

    })
    .when('/contact', {
        templateUrl: 'views/contact.html'

    })
    .when('/team', {
        templateUrl: 'views/team.html'

    })
    .when('/about', {
        templateUrl: 'views/about.html'

    })
}]);