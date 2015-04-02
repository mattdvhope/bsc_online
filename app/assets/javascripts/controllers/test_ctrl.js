angular.module('myApp')
.controller('TestCtrl',['$scope', function($scope) {
  $scope.alertMe = function(arguments) {
    alert('you\'re a genius!');
  };
}]);