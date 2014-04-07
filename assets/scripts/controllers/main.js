(function () {

    var app = angular.module('AngularSailsApp');

    app.controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

})();