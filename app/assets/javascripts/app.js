app = angular.module('Assessment', [
  'templates',
  'ngRoute',
  'ngResource'
]);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/',
        templateUrl: "home/_home.html"
        controller: 'ThisCtrl'
      )
}]);

app.controller('ThisCtrl', [
'$scope',
'Auth',
function($scope, $resource){
  $resource("/entries/:id.json", {id: "@id", format: 'json'},
    {
      update: {method: "PUT"}
    }
  )

}]);
