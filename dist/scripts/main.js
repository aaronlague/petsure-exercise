(function () {

angular.module('app', []).controller('PetController', function ($scope, $http) {

$scope.pets = []; 

//$scope.getTitles = function () { 
var url = "http://www.mocky.io/v2/589a002e0f00005a0e1f4cb1"

$http.get(url).then( function(response) {
  $scope.pets = response.data;
  console.log ($scope.pets)
});

 
//}

});
 })();