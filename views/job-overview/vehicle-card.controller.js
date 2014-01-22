(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .controller("mi.repair.web.VehicleCardCtrl", ['$scope', function($scope) {

            //console.log($scope.jobItem);

            $scope.commands = {
                clickCommand: function() {
                    console.log("Clicked from Vehicle Card!!");
                }
            }
        }]);

}(angular))