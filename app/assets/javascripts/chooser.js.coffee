app = angular.module 'Chooser', ['ngResource']

app.config ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')

app.factory "Choice", ($resource) ->
  $resource("/choices/:id", {id: "@id", format: 'json'},
    {
      'update': {method: "PUT"}
    }
  )

app.factory "Choices", ($resource) ->
  $resource("/choices/:id", {id: "@id", format: 'json'},
    {
      'query':  {method:'GET', isArray:true}
    }
  )

app.controller "ChoicesController", @ChoicesController = ($scope, Choices, $http) ->
  $scope.choices = Choices.query()

  $scope.selectChoice = (choice) ->
    angular.forEach $scope.choices, (choice) ->
      $http.put('/choices/' + choice.id + '.json').success (data) ->
        choice.selected = false
        # return

    $http.put('/choices/' + choice.id + '.json').success (data) ->
      choice.selected = true
      return














