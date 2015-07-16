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
                controller: 'ArticleCtrl'
            })
            .state('blogging', {
                url: '/blogging',
                templateUrl: 'views/article/blogging.html'
            });


        $urlRouterProvider.otherwise('index');
    }]);