angular.module('app.signup', [])

.controller('signUpCtrl', ['$scope', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state) {

  $scope.signUp = function () {
        $state.go('ordersManager.login');
    }

}])
