app = angular.module 'Raffler', ['ngResource']

app.config ["$httpProvider", ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
]

app.controller "RaffleCtrl", @RaffleCtrl = ($scope, $resource) ->
  Entry = $resource("/entries/:id.json", {id: "@id"}, {update: {method: "PUT"}})
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




