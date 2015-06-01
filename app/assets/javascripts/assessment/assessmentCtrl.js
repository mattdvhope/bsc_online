angular.module('assessment')

.controller('AssessmentCtrl', [
'$scope',
'$http',
function($scope, $http){

  $scope.assessment = $http.get('.json');

}]);
