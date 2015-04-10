app = angular.module 'Hello', []

app.controller "HelloCntl", @HelloCntl = ($scope) ->
  $scope.name = 'World'