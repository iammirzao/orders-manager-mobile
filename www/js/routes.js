angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('ordersManager', {
    url: '/ordersManager',
    templateUrl: 'templates/main/ordersManager.html',
    controller: 'ordersManagerCtrl'
  })

  .state('ordersManager.login', {
    url: '/login',
    views: {
      'ordersManager': {
        templateUrl: 'templates/start/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('ordersManager.signUp', {
    url: '/signup',
    views: {
      'ordersManager': {
        templateUrl: 'templates/start/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })

  .state('ordersManager.customers', {
    url: '/customers',
    views: {
      'ordersManager': {
        templateUrl: 'templates/customers/customers.html',
        controller: 'customersCtrl'
      }
    }
  })

  .state('ordersManager.orders', {
    url: '/orders',
    views: {
      'ordersManager': {
        templateUrl: 'templates/orders/orders.html',
        controller: 'ordersCtrl'
      }
    }
  })

  .state('addNewCustomer', {
    url: '/addnewcustomer',
    templateUrl: 'templates/customers/addNewCustomer.html',
    controller: 'addNewCustomerCtrl'
  })

  .state('addNewOrder', {
    url: '/addneworder',
    templateUrl: 'templates/orders/addNewOrder.html',
    controller: 'addNewOrderCtrl'
  })

  .state('ordersManager.customerInfo', {
    url: '/customerinfo',
    views: {
      'ordersManager': {
        templateUrl: 'templates/customers/customerInfo.html',
        controller: 'customerInfoCtrl'
      }
    }
  })

  .state('ordersManager.orderInfo', {
    url: '/orderinfo',
    views: {
      'ordersManager': {
        templateUrl: 'templates/orders/orderInfo.html',
        controller: 'orderInfoCtrl'
      }
    }
  })

  .state('ordersManager.editCustomer', {
    url: '/editcustomer',
    views: {
      'ordersManager': {
        templateUrl: 'templates/customers/editCustomer.html',
        controller: 'editCustomerCtrl'
      }
    }
  })

  .state('ordersManager.editOrder', {
    url: '/editorder',
    views: {
      'ordersManager': {
        templateUrl: 'templates/orders/editOrder.html',
        controller: 'editOrderCtrl'
      }
    }
  })

  .state('ordersManager.editProfile', {
    url: '/editprofile',
    views: {
      'ordersManager': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/ordersManager/login')


});
