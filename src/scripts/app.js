(function () {

angular.module('app', []).controller('PetController', function ($scope, $http) {

$scope.pets = []; 

var url = "http://www.mocky.io/v2/589a457d0f00004f151f4d2d"

$http.get(url).then( function(response) {
  $scope.pets = response.data;
  $scope.displayPet = function(pet){
    $scope.petName = pet.petName + '\'s'
  }
  console.log ($scope.pets)
});


});
 })();