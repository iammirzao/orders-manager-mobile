angular.module('app.customers', [])

.controller('customersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.customers = [{ name: "Mirza Omerovic"}, { name: "Eman Jasarevic"}, { name: "Sahin Repuh"}];

}])
