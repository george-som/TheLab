(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .directive("jobOverviewCard", function() {

            return {
                restrict: "AE",
                template: '<div>{{templateUrl}}</div>'
            }
        })

}(angular))
