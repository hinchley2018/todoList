var myTodo = angular.module('myTodo', []);

mainController($scope, $http) => {
  $scope.formData = {};

  //when landing on the page, get all todos and show them
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data){
      console.log("Error: " + data);
    });

  //when submitting add form, send the text to node API
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; //clear the form so our user to enter another
        $scope.todos = data;
      })
      .error(function(data){
        console.log("Error: " + data);
      });
  }

  //delete a todo after checking it
  $scope.deleteTodo = function(id){
    $http.delete('/api/todos/' +id)
      .success(function(data){
        $scope.todos = data;
      })
      .error(function(data){
        console.log("Error: " + data);
      });
  }

}
