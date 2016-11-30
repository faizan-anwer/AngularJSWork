 // let's define the scotch controller that we call up in the about state
            routerApp.controller('directive', ['$scope', function($scope) {
                  $scope.customer = {
                    name: 'Naomi',
                    address: '1600 Amphitheatre'
                  };
                }])
                .directive('myCustomer', function() {
                  return {
                    templateUrl: 'my-customer.html'
                  };
                });
