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
            .state('category', {
                url: 'category',
                templateUrl: 'views/category/category.html',
                controller: 'CategoryCtrl'
            }).state('article', {
                url: '',
                templateUrl: 'views/article/index.html',
                controller: 'ArticleCtrl'
            });


        $urlRouterProvider.otherwise('article');
    }]);