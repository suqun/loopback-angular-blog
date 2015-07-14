angular
  .module('app', [
    'lbServices',
    'categoryServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: 'todo',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .state('category', {
        url: '',
        templateUrl: 'views/category/category.html',
        controller: 'CategoryCtrl'
      });


      $urlRouterProvider.otherwise('todo');
  }]);