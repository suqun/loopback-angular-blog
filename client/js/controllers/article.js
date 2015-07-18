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
                .findIncludeUser()
                .$promise
                .then(function (results) {
                    $scope.articles = results;
                })
        }
        getArticles();

        $scope.addArticle = function (){
            console.log("creating a new article...");
            Article
                .create($scope.newArticle)
                .$promise
                .then(function(aticle){
                    $scope.newArticle = '';
                    $scope.articleForm.content.$setPristine();
                });
        };

    }]);
