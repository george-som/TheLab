(function(ng) {
    "use strict";

    ng.module("mi.repair.web", ['ngRoute', 'ngAnimate'])
        .config(["$routeProvider", "$locationProvider",
            function($routeProvider, $locationProvider) {

                $routeProvider
                    /*
                    .when("/", {
                        templateUrl: "views/job-overview/job-list.html",
                        controller: "mi.repair.web.MainCtrl"

                    })*/
                    .when("/", {
                        templateUrl: "views/job-overview/job-overview.html",
                        controller: "mi.repair.web.MainCtrl"

                    });

                //$locationProvider.html5Mode(true);
            }]);

    ng.module("mi.repair.web")

        .controller("mi.repair.web.MainCtrl", ['$scope', function($scope) {

        }])
        .directive("miShell", [function() {

            return {
                restrict: 'AE',
                templateUrl: "components/shell/shell.html"
                //controller: "mi.repair.web.ShellCtrl"
            }
        }]);
}(angular))
