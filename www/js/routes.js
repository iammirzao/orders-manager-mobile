angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('dresBa', {
    url: '/side-menu21',
    templateUrl: 'templates/dresBa.html',
    controller: 'dresBaCtrl'
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/page8',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('dresBa.customers', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customers.html',
        controller: 'customersCtrl'
      }
    }
  })

  .state('addNewCustomer', {
    url: '/page10',
    templateUrl: 'templates/addNewCustomer.html',
    controller: 'addNewCustomerCtrl'
  })

  .state('dresBa.customerInfo', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customerInfo.html',
        controller: 'customerInfoCtrl'
      }
    }
  })

  .state('dresBa.editCustomer', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editCustomer.html',
        controller: 'editCustomerCtrl'
      }
    }
  })

  .state('dresBa.orders', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orders.html',
        controller: 'ordersCtrl'
      }
    }
  })

  .state('dresBa.orderInfo', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orderInfo.html',
        controller: 'orderInfoCtrl'
      }
    }
  })

  .state('dresBa.editOrder', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editOrder.html',
        controller: 'editOrderCtrl'
      }
    }
  })

  .state('dresBa.myProfile', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')


});