(
    function() {
        "use strict;"
        angular.module("nameCalcApp", [])
                .controller("nameDivision", function($scope) {
            $scope.name = "";

            var getCode = function(str) {
                var codeValue = 0;
            
                for (var i = 0; i < str.length; i++) {
                    codeValue += str.charCodeAt(i);
                }
            
                return codeValue;
            }

            $scope.displayCode = function() {
                return getCode($scope.name);
            }
        });
    }
)();