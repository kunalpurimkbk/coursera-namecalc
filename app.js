(
    function() {
        "use strict;"
        angular.module("nameCalcApp", [])
                .controller("nameDivision", function($scope) {
            $scope.name = "";
            $scope.getCodeFromName = function(str) {
                var codeValue = 0;
            
                for (var i = 0; i < str.length; i++) {
                    codeValue += str.charCodeAt(i);
                }
            
                return "" + codeValue;
            }
        });
    }
)();