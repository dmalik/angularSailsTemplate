(function () {

    var app = angular.module('AngularSailsApp', ['angularSails.base','ngCookies','ngResource','ngSanitize','ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();