angular.module('app.login', [])

.controller('loginCtrl', ['$scope', '$ionicModal', '$state', '$firebaseAuth', '$firebase', '$ionicLoading', '$rootScope', 'UserService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $ionicModal, $state, $firebaseAuth, $firebase, $ionicLoading, $rootScope, UserService) {

  console.log('Login Controller Initialized');

  $rootScope.isLoggedIn = false;

//  UserService.signUp($scope.user);

  $scope.signUp = function (user){
    UserService.signUp(user);
  }

  $scope.signIn = function (user){
    UserService.signIn(user);
  }

}])
