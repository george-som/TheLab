(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .directive("jobOverviewCard", function() {

            return {
                //scope: {},
                scope: true,
                restrict: "AE",
                template: '<div data-ng-include data-src="template.url"></div>',
                controller: "mi.repair.web.JobOverviewCardCtrl"
            }
        })
        .controller("mi.repair.web.JobOverviewCardCtrl", ["$scope", "$attrs", function($scope, $attrs) {

            $scope.template = {
                url: $attrs.templateurl
            };

            $scope.commands = {};

        }]);

}(angular))
