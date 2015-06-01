// angular.module('question')

// .factory('questions', [
// '$http',
// function($http){
//   var o = {
//     questions: []
//   };
//   o.getAll = function() {
//     return $http.get('/questions.json').success(function(data){
//       angular.copy(data, o.questions);
//     });
//   };
  // o.create = function(post) {
  //   return $http.post('/posts.json', post).success(function(data){
  //     o.posts.push(data);
  //   });
  // };
  // o.upvote = function(post) {
  //   return $http.put('/posts/' + post.id + '/upvote.json')
  //     .success(function(data){
  //       post.upvotes += 1;
  //     });
  // };
  // o.get = function(id) {
  //   return $http.get('/question/' + id + '.json').then(function(res){
  //     return res.data;
  //   });
  // };
  // o.addComment = function(id, comment) {
  //   return $http.post('/posts/' + id + '/comments.json', comment);
  // };
  // o.upvoteComment = function(post, comment) {
  //   return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
  //     .success(function(data){
  //       comment.upvotes += 1;
  //     });
  // };
//   return o;
// }])

