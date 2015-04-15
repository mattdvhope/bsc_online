app = angular.module 'Raffler', ['ngResource']

app.config ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')

app.factory "Entry", ($resource) ->
  $resource("/entries/:id.json", {id: "@id"}, {update: {method: "PUT"}})

app.controller "RaffleCtrl", @RaffleCtrl = ($scope, Entry) ->
  $scope.entries = Entry.query()

  $scope.addEntry = ($event) ->
    $event.preventDefault()
    entry = Entry.save($scope.newEntry)
    $scope.entries.push(entry)
    $scope.newEntry = {}

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




