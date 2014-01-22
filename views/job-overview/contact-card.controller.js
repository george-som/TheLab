(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .controller("mi.repair.web.ContactCardCtrl", ['$scope', function($scope) {

            //console.log($scope.jobItem);

            $scope.commands = {
                clickCommand: function() {
                    console.log("Clicked from Contact card!!");
                }
            }
    }]);

}(angular))