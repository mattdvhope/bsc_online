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
  $resource("/choices", {format: 'json'},
    {
      'query':  {method:'GET', isArray:true}
    }
  )

app.controller "ChoiceController", @ChoiceController = ($scope, Choices, Choice) ->
  $scope.choices = Choices.query()

  $scope.selectChoice = ($event) ->
    # $event.preventDefault()
    choice = Choice.update()

  $scope.drawWinner = ->
    pool = []
    angular.forEach $scope.entries, (entry) ->
      pool.push(entry) if !entry.winner
    if pool.length > 0
      entry = pool[Math.floor(Math.random()*pool.length)]
      entry.winner = true
      entry.$update()
      $scope.lastWinner = entry

  $scope.removeWinner = ->
    pool = []
    angular.forEach $scope.entries, (entry) ->
      pool.push(entry) if entry.winner
    if pool.length > 0
      entry = pool[Math.floor(Math.random()*pool.length)]
      entry.winner = false
      entry.$update()
      $scope.lastWinner = entry

app.filter 'orderObjectBy', [ ->
  'items'
  'field'
  'reverse'
  (items, field, reverse) ->
      filtered = []
      angular.forEach items, (item) ->
        filtered.push item
      filtered.sort (a, b) ->
        if a[field] > b[field] then 1 else -1
      if reverse
        filtered.reverse()
      filtered
]




