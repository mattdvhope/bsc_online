app = angular.module('Assessment', [
  'templates',
  'ngRoute',
  'ngResource'
]);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'home/_home.html',
      controller:  'ThisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.controller('ThisCtrl', [
'$scope',
'$resource',
function($scope, $resource){
  Assessment = $resource("/curriculums/:curriculum_id/courses/:course_id/assessments/:id",
    {curriculum_id: "@curriculum_id", course_id: "@course_id", id: "@id", format: 'json'});

  $scope.assessType = Assessment.get();

  $scope.findType = function() {
    $scope.description = 'This is a ' + $scope.assessType + '!';
  };

}]);




