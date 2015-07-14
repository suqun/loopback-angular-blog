angular
  .module('app')
  .controller('TodoCtrl', ['$scope', '$state', 'Todo', function($scope,
      $state, Todo) {
    $scope.todos = [];
    function getTodos() {
      Todo
        .find()
        .$promise
        .then(function(results) {
          $scope.todos = results;
        });
    }
    getTodos();

    $scope.addTodo = function() {
      Todo
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.todoForm.content.$setPristine();
          $('.focus').focus();
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          getTodos();
        });
    };
  }]).controller('CategoryCtrl', ['$scope', '$state', 'Category', function ($scope, $state, Category) {
      $scope.categories = [];
      function getCategories() {
        Category
            .find()
            .$promise
            .then(function (results) {
              $scope.categories = results;
            })
      }
      getCategories();
    }]);
