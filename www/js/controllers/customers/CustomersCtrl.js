angular.module('app.customers', [])

.controller('customersCtrl', ['$scope', '$stateParams', 'UserService', '$state', 'OrdersAndCustomersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserService, $state, OrdersAndCustomersService) {

  $scope.init = function () {
    $scope.customers = [];
    OrdersAndCustomersService.getCustomers()
      .then(function(customers){
        $scope.customers = customers;
      });
  };

  $scope.setCustomerInfo = function (customer){
    OrdersAndCustomersService.setCustomerInfo(customer);
  }

  $scope.init();

}])
