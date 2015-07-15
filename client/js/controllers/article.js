/**
 * Created by larry on 15-7-15.
 * Article controller
 */
angular
    .module('app')
    .controller('ArticleCtrl', ['$scope', '$state', 'Article', function ($scope, $state, Article) {
        $scope.articles = [];
        function getArticles() {
            Article
                .find()
                .$promise
                .then(function (results) {
                    $scope.articles = results;
                })
        }
        getArticles();
    }]);
