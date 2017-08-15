angular.module('app.orderscustomers', [])

.factory('OrdersAndCustomersService', ['$state', '$firebase', '$rootScope',

function($state, $firebase, $rootScope){
  var database = firebase.database();
  return {
    addCustomer: function(user) {
      firebase.database().ref('users/' + userId).set({
        creator: user.name,
        customerName: user.customer,
        customerEmail: user.email,
        customerNumber: user.email,
        customerAddress: user.email,
        customerEmail: user.email,
        profile_picture : imageUrl
      });
      console.log("Customer is successfully added");
    },

    signIn: function (user){
      console.log("test2");
    }
  };

}]);

