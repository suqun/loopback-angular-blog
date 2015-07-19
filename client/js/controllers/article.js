/**
 * Created by larry on 15-7-15.
 * Article controller
 */
angular
    .module('app')
    .controller('ArticleController', ['$scope', '$state', 'Article', function ($scope, $state, Article) {
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

        $scope.addArticle  = function() {
            console.log("creating a new article...");
            var newArticle = $scope.newArticle;
            newArticle.author_id = "55a66ce8c647245c0f7f06b4";
            newArticle.create_at = "2015-07-18 23:34:12";
            newArticle.update_at = "2015-07-18 23:34:12";
            newArticle.category_id = "1";
            newArticle.deleted = "false";
            console.log(newArticle);
            Article
                .create(newArticle)
                .$promise
                .then(function(aticle){
                    console.log($setPristine());
                    console.log("a new article created");

                    //$scope.newArticle = '';
                    //$scope.articleForm.content.$setPristine();
                });
        };

    }]);
