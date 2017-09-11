angular.module('app.orderscustomers', [])

.factory('OrdersAndCustomersService', ['$state', '$firebase', '$rootScope', 'UserService', '$q',

function($state, $firebase, $rootScope, UserService, $q){

  var orderInfo = {};
  var customerInfo = {};

  return {
    addOrder: function (order){
      var ref = firebase.database().ref().push();
      var id = ref.key;
      firebase.database().ref('orders/' + id).set({
        creator: UserService.getCurrentUser().uid,
        customer: order.customer,
        customerId: "-Krp8vowKt4xML5Sr26S",
        orderInfo: order.orderInfo,
        orderPrice: order.orderPrice,
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
        customerId: order.customerId,
        orderInfo: order.orderInfo,
        orderPrice: order.orderPrice,
        trackingNo: order.trackingNo,
        id: order.id
      });
      console.log("Order is successfully updated: ", order.id);
      $state.go('ordersManager.orders');
    },

    getOrders: function (){
      var orders = [];
      var getOrders = firebase.database().ref('orders/');
      return $q(function(resolve, reject) {
        getOrders.on('value', function(snapshot) {
          var allOrders = snapshot.val();
          _.forEach(allOrders, function(value) {
            if(value.creator == UserService.getCurrentUser().uid){
              orders.push(value);
            }
          });
          resolve(orders);
        });
      });
    },

    deleteOrder: function (order, index){
      var getOrders = firebase.database().ref('orders/' + order.id);
      getOrders.remove();
      $state.go('ordersManager.orders');
    },

    getCustomerOrders: function (customerId){
      var orders = [];
      var getOrders = firebase.database().ref('orders/');
      return $q(function(resolve, reject) {
        getOrders.on('value', function(snapshot) {
          var allOrders = snapshot.val();
          _.forEach(allOrders, function(value) {
            if(value.customerId == customerId){
              orders.push(value);
            }
          });
          resolve(orders);
        });
      });
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

    updateCustomer: function (customer){
      firebase.database().ref('customers/' + customer.id).set({
        creator: UserService.getCurrentUser().uid,
        fullName: customer.fullName,
        address: customer.address,
        city: customer.city,
        zip: customer.zip,
        country: customer.country,
        contactNo: customer.contactNo,
        id: customer.id
      });
      console.log("Customer is successfully updated: ", customer.id);
      $state.go('ordersManager.customers');
    },

    getCustomers: function (){
      var customers = [];
      var getCustomers = firebase.database().ref('customers/');
      return $q(function(resolve, reject) {
        getCustomers.on('value', function(snapshot) {
          var allCustomers = snapshot.val();
          _.forEach(allCustomers, function(value) {
            if(value.creator == UserService.getCurrentUser().uid){
              customers.push(value);
            }
          });
          resolve(customers);
        });
      });
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
    }

  };

}]);

