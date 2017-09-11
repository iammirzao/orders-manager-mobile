angular.module('app.editorder', [])

.controller('editOrderCtrl', ['$scope', '$stateParams', '$rootScope', 'OrdersAndCustomersService', 'UserService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, OrdersAndCustomersService, UserService) {

  $scope.init = function () {
    $scope.customers = [];
    OrdersAndCustomersService.getCustomers()
      .then(function(customers){
        $scope.customers = customers;
      });
  };

  $scope.order = OrdersAndCustomersService.getOrderInfo();

  $scope.saveOrder = function (order){
    OrdersAndCustomersService.updateOrder(order);
  }

  $scope.deleteOrder = function (order){
    OrdersAndCustomersService.deleteOrder(order);
  }

  $scope.init();

}])
