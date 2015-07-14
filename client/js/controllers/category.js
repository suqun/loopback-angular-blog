/**
 * Created by larry on 15-7-12.
 * category controller
 */
angular
    .module('app')
    //.controller('CategoryCtrl', ['$scope', function ($scope) {
    //    $scope.categories = [1,2,3];
    //}]);
    .controller('CategoryCtrl', ['$scope', '$state', 'Category', function ($scope, $state, Category) {
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
