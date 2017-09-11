angular.module('app.ordersmanager', [])

.controller('ordersManagerCtrl', ['$scope', '$stateParams', 'UserService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserService) {

  console.log('Orders Manager Controller Initialized');

  $scope.loggedUser = UserService.getCurrentUser();
  console.log($scope.loggedUser);

  $scope.logOut = function (){
    UserService.logOut();
  }

}])

