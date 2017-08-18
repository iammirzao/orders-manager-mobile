angular.module('app.orderscustomers', [])

.factory('OrdersAndCustomersService', ['$state', '$firebase', '$rootScope', 'UserService',

function($state, $firebase, $rootScope, UserService){

  var orderInfo = {};
  var customerInfo = {};

  return {
    addOrder: function (order){
      var ref = firebase.database().ref().push();
      var id = ref.key;
      firebase.database().ref('orders/' + id).set({
        creator: UserService.getCurrentUser().uid,
        customer: order.customer,
        orderInfo: order.orderInfo,
        trackingNo: order.trackingNo,
        id: id
      });
      console.log("Order is successfully added: ", id);
      $state.go('ordersManager.orders');
    },

    updateOrder: function (order){
      firebase.database().ref('orders/' + order.id).set({
        creator: UserService.getCurrentUser().uid,
        customer: order.customer,
        orderInfo: order.orderInfo,
        trackingNo: order.trackingNo,
        id: order.id
      });
      console.log("Order is successfully updated: ", order.id);
      $state.go('ordersManager.orders');
    },

    addCustomer: function(customer) {
      var database = firebase.database();
      console.log("BAZA: ", database);
      var ref = firebase.database().ref().push();
      var id = ref.key;
      firebase.database().ref('customers/' + id).set({
        creator: UserService.getCurrentUser().uid,
        fullName: customer.fullName,
        address: customer.address,
        city: customer.city,
        zip: customer.zip,
        country: customer.country,
        contactNo: customer.contactNo,
        id: id
      });
      console.log("Customer is successfully added");
      $state.go('ordersManager.customers');
    },

    setOrderInfo: function (order){
      orderInfo = order;
    },

    getOrderInfo: function (){
      return orderInfo;
    },

    setCustomerInfo: function (customer){
      customerInfo = customer;
    },

    getCustomerInfo: function (){
      return customerInfo;
    },

//    getOrders: function() {
//      var getOrders = firebase.database().ref('orders/');
//      getOrders.on('value', function(snapshot) {
//       var allOrders = snapshot.val();
//       var orders = [];
//       _.forEach(allOrders, function(value) {
//         if(value.creator == UserService.getCurrentUser().uid){
//           orders.push(value);
//         }
//       });
//      });
//    }

  };

}]);

