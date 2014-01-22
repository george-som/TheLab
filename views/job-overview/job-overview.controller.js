(function(ng) {
    "use strict";

    ng.module("mi.repair.web")
        .controller("mi.repair.web.JobOverviewCtrl", ['$scope', function($scope) {

            //console.log($scope.jobItem);

            $scope.jobItem = getJobItem();

            function getJobItem() {
                var jobItem = {
                    contacts: {
                        "insured": {
                            firstName: "Vicky", lastName: "Owens",
                            phoneNumber: "(858) 342-3454",
                            email: "v.owens@gmail.com",
                            address: {
                                street: "1375 Cost Verde Blvd.",
                                city: "San Diego",
                                state: "CA",
                                zip: "92122"
                            }
                        }
                    },
                    vehicle: {
                        year: 2012,
                        make: "Toyota",
                        model: "Camry",
                        subModel: "Hybrid XLE",
                        body: "4-Door Sedan",
                        color: "Silver",
                        vin: "4T1BD1FKSCU016739",
                        licensePlate: "4GHJ133",
                        condition: "Drivable"
                    },
                    claim: {
                        adjuster: {
                            firstName: "Carl", lastName: "Atkins",
                            phoneNumber: "(505) 335-2608"
                        },
                        company: {
                            name: "Farmwide Mutual"
                        },
                        claimNumber: "13-1344843-02",
                        policyNumber: "13352278-B",
                        total: 500,
                        notes: "Customer has indicated that the vehicle is already at the shop. Rental will be covered in full."
                    }
                }

                return jobItem;
            }
        }]);

}(angular))