angular.module('app.orders', [])

.controller('ordersCtrl', ['$scope', '$stateParams', 'UserService', '$state', 'OrdersAndCustomersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserService, $state, OrdersAndCustomersService) {

  $scope.init = function () {
    $scope.orders = [];
    OrdersAndCustomersService.getOrders()
      .then(function(orders){
        $scope.orders = orders;
      });
  };

  $scope.setOrderInfo = function (order){
    OrdersAndCustomersService.setOrderInfo(order);
  }

  $scope.deleteOrder = function (order, index){
    OrdersAndCustomersService.deleteOrder(order, index);
    $scope.orders.splice(index, 1);
  }

  $scope.init();

}])
