var app = angular.module('assessment', ['ui.router', 'templates']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('assessment', {
      url: '/assessment',
      templateUrl: 'assessment/_assessment.html',
      controller: 'AssessmentCtrl'
      // ,
      // resolve: {
      //   postPromise: ['posts', function(posts){
      //     return posts.getAll();
      //   }]
      // }
    });
    // .state('questions', {
    //   url: '/questions/{id}',
    //   controller: 'PostsCtrl',
    //   resolve: {
    //     post: ['$stateParams', 'posts', function($stateParams, posts) {
    //       return posts.get($stateParams.id);
    //     }]
    //   }
    // })
    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'auth/_login.html',
    //   controller: 'AuthCtrl',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]
    // })
    // .state('register', {
    //   url: '/register',
    //   templateUrl: 'auth/_register.html',
    //   controller: 'AuthCtrl',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]
    // });

  $urlRouterProvider.otherwise('assessment');
}])

