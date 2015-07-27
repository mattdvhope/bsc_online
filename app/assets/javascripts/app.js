app = angular.module('assessment', [
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
      controller:  'ThisController'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.controller('ThisController', [
'$scope',
'$resource',
function($scope, $resource){
  var Assess = $resource("/assessments/:id.json", {id: "@id", format: 'json'});
  console.log(Assess);
  console.log(Assess.get());

  Assess.get(function(callbackdata){
      //function is called on success
      console.log(callbackdata);
    }
  );

  $scope.findType = function() {
    $resolved = true;
    $scope.description = 'This is a ' + Assess.type_of + '!';
  };

}]);




