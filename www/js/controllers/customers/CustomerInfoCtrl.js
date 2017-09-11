angular.module('app.customerinfo', [])

.controller('customerInfoCtrl', ['$scope', '$stateParams', 'OrdersAndCustomersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OrdersAndCustomersService) {

  $scope.customerInfo = OrdersAndCustomersService.getCustomerInfo();

  OrdersAndCustomersService.getCustomerOrders($scope.customerInfo.id)
    .then(function(orders){
      $scope.customerOrders = orders;
    });

  $scope.setOrderInfo = function (order){
    OrdersAndCustomersService.setOrderInfo(order);
  }

}])
