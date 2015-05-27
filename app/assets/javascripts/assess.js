var app = angular.module('assessApp', [
          'ui.router',
          'templates',
          'ngResource'
          ]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('assessment', {
      url: '/assessment',
      templateUrl: 'assessment/_assessment.html'
    });

  $urlRouterProvider.otherwise('assessment');
}]);
