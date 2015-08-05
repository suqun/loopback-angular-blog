/**
 * Created by larry on 15-7-24.
 * User controller
 */
angular
    .module('app')
    .controller('UserController', ['$scope','$window','$state','$location','User', function ($scope,$window,$state,$location, User) {
        $scope.login  = function() {
            User
                .login($scope.user)
                .$promise
                .then(function(user){
                    //console.log(resource);
                    //$state.go("index");
                    console.log(user.id); // => acess token
                    console.log(user.ttl); // => 1209600 time to live
                    console.log(user.created); // => 2013-12-20T21:10:20.377Z
                    console.log(user.userId); // => 1
                    //AppAuth.currentUser = $scope.loginResult.user;
                    //CoreService.toastSuccess(gettextCatalog.getString('Logged in'),
                    //    gettextCatalog.getString('You are logged in!'));
                    $state.go("index");
                },function(req){
                    $scope.loginError = req.data.error;
                    //console.log(req.error.statusCode);
                });
        };

    }]);
