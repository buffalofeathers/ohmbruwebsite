angular.module('p2.controllers', [])
.controller('BlogListController', ['$scope', 'SEOService', '$location','PostFactory', function($scope, SEOService, $location,PostFactory) {
    SEOService.setSEO({
        title: 'ohmbru | Home',
        description: 'This site is designed to showcase the company',
        url: $location.absUrl()
    });
}])