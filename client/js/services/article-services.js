(function (window, angular, undefined) {
    'use strict';

    var urlBase = "/api";

    var module = angular.module("articleServices", ['ngResource']);

    module.factory('Article', ['$resource', function ($resource) {
        return $resource('/article/:id',
            {'id': '@id'},
            {
                "find": {
                    isArray: true,
                    url: urlBase + "/article",
                    method: "GET"
                },
                "findIncludeUser": {
                    url: urlBase + "/article?filter[include]=user",
                    method: "GET",
                    isArray: true
                },
                "create": {
                    url: urlBase + "/article",
                    method: "POST"
                }
            });
    }]);

})(window, window.angular);
