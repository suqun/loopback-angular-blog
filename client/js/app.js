angular
    .module('app', [
        'lbServices',
        'categoryServices',
        'articleServices',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                               $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '',
                templateUrl: 'views/article/list.html',
                controller: 'ArticleController'
            })
            .state('blogging', {
                url: '/blogging',
                templateUrl: 'views/article/blogging.html',
                controller: 'ArticleController'
            })
            .state('todo', {
                url: '/todo',
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            });


        $urlRouterProvider.otherwise('index');
    }]);