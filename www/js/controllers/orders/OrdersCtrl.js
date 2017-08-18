angular.module('app.orders', [])

.controller('ordersCtrl', ['$scope', '$stateParams', 'UserService', '$state', 'OrdersAndCustomersService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserService, $state, OrdersAndCustomersService) {

  $scope.init = function () {
    $scope.orders = [];
    var getOrders = firebase.database().ref('orders/');
    getOrders.on('value', function(snapshot) {
      var allOrders = snapshot.val();
      _.forEach(allOrders, function(value) {
        if(value.creator == UserService.getCurrentUser().uid){
          $scope.orders.push(value);
        }
      });
      $state.reload();
    });
  };

  $scope.setOrderInfo = function (order){
    OrdersAndCustomersService.setOrderInfo(order);
  }

  $scope.init();

}])
