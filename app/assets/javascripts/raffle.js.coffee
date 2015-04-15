app = angular.module 'Raffler', ['ngResource', 'app.filters']

app.config ["$httpProvider", ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
]

app.factory "Entry", ["$resource", ($resource) ->
  $resource("/entries/:id.json", {id: "@id"}, {update: {method: "PUT"}})
]

app.controller "RaffleCtrl", @RaffleCtrl = ["$scope", "Entry", ($scope, Entry) ->
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
]

angular.module('app.filters', []).filter 'orderObjectBy', [ ->
  (items, field, reverse) ->
    filtered = []
    angular.forEach items, (item) ->
      filtered.push item
      return
    filtered.sort (a, b) ->
      if a[field] > b[field] then 1 else -1
    if reverse
      filtered.reverse()
    filtered
]








