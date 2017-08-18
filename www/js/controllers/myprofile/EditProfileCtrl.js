angular.module('app.editprofile', [])

.controller('editProfileCtrl', ['$scope', '$stateParams', 'UserService', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UserService, $rootScope) {

  $scope.init = function () {
     var currentUser = UserService.getCurrentUser();
     $scope.user = {
        displayName: currentUser.displayName,
        email: currentUser.email
     }
  };

  $scope.updateUser = function (user){
    UserService.updateUser(user.displayName, user.email);
  }

  $scope.init();

}])
