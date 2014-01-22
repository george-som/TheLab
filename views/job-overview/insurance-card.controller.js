(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .controller("mi.repair.web.InsuranceCardCtrl", ['$scope', function($scope) {

            //console.log($scope.jobItem);

            $scope.commands = {
                clickCommand: function() {
                    console.log("Clicked from Insurance card!!");
                }
            }
        }]);

}(angular))