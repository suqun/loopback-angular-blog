(function(window, angular, undefined) {'use strict';

var urlBase = "/api";

var module = angular.module("categoryServices", ['ngResource']);

module.factory('Category', ['$resource', function($resource) {
  return $resource('/category/:id',
      { 'id': '@id' },
      {
        "find": {
                isArray: true,
                url: urlBase + "/Category",
                method: "GET"
              }
      });
}]);

//module.factory(
//      "Category",
//    ['CategoryResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
//        var R = Resource(
//            urlBase + "/Category/:id",
//            { 'id': '@id' },
//            {
//              "create": {
//                url: urlBase + "/Category",
//                method: "POST"
//              },
//
//              "upsert": {
//                url: urlBase + "/Category",
//                method: "PUT"
//              },
//
//              "exists": {
//                url: urlBase + "/Category/:id/exists",
//                method: "GET"
//              },
//
//              "findById": {
//                url: urlBase + "/Category/:id",
//                method: "GET"
//              },
//
//              "find": {
//                isArray: true,
//                url: urlBase + "/Category",
//                method: "GET"
//              },
//
//              "findOne": {
//                url: urlBase + "/Category/findOne",
//                method: "GET"
//              },
//
//              "updateAll": {
//                url: urlBase + "/Category/update",
//                method: "POST"
//              },
//
//              "deleteById": {
//                url: urlBase + "/Category/:id",
//                method: "DELETE"
//              },
//
//              "count": {
//                url: urlBase + "/Category/count",
//                method: "GET"
//              },
//
//              "prototype$updateAttributes": {
//                url: urlBase + "/Category/:id",
//                method: "PUT"
//              }
//            }
//        );
//
//        R["updateOrCreate"] = R["upsert"];
//
//        R["update"] = R["updateAll"];
//
//        R["destroyById"] = R["deleteById"];
//
//        R["removeById"] = R["deleteById"];
//
//        R.modelName = "Category";
//
//        return R;
//      }]);
//

})(window, window.angular);
