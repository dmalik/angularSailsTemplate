'use strict';

angular.module('AngularSailsApp', ['sails.io', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });