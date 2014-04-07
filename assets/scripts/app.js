'use strict';

angular.module('AngularSailsApp', ['angularSails.base', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
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