var app = angular.module('assessment', ['ui.router', 'templates']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('assessment', {
      url: '/assessments/{id}',

      templateUrl: 'assessment/_assessment.html',
      controller: 'AssessmentCtrl'
      // ,
      // resolve: {
      //   postPromise: ['posts', function(posts){
      //     return posts.getAll();
      //   }]
      // }
    })
    .state('questions', {
      url: '/questions',
      controller: 'AssessmentCtrl'
      // ,
      // resolve: {
      //   post: ['$stateParams', 'posts', function($stateParams, posts) {
      //     return posts.get($stateParams.id);
      //   }]
      // }
    });

  $urlRouterProvider.otherwise('assessment');
}])

