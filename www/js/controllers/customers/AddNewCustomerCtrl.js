angular.module('app.addnewcustomer', [])

.controller('addNewCustomerCtrl', ['$scope', '$stateParams', 'OrdersAndCustomersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OrdersAndCustomersService) {

  $scope.customer = {
    fullName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    contactNo: ""
  };

  $scope.addCustomer = function (customer){
    OrdersAndCustomersService.addCustomer(customer);
  }

}])
