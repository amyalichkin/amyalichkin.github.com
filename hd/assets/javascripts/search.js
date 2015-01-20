/*global angular: true */

;(function ($$) {
    'use strict';

    var imagesSearch = $$.module('imagesSearch', []);

    imagesSearch.controller('ImagesList', ['$scope', '$http', function($scope, $http) {
        $scope.query = '';
        $scope.images = [];

        $scope.update = function () {
            if ($scope.query) {
                $http
                    .jsonp('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + $scope.query + '&rsz=8&imgsz=large&callback=JSON_CALLBACK')
                    .success(function (data) {
                        $scope.images = data.responseData.results;
                    });
            } else {
                $scope.images = [];
            }
        };

    }]);

}).call(this, angular);
