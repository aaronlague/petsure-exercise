(function () {

angular.module('app', ['ngFileUpload']).controller('PetController', function ($scope, $http, Upload, $timeout) {

$scope.pets = []; 

var url = "http://www.mocky.io/v2/589a457d0f00004f151f4d2d"
$http.get(url).then( function(response) {
  $scope.pets = response.data;
  $scope.displayPet = function(pet){
    $scope.petName = pet.petName + '\'s'
  }
  console.log ($scope.pets)
});

$scope.$watch('files', function () {
    $scope.upload($scope.files);
});

$scope.$watch('file', function () {
    if ($scope.file != null) {
        $scope.files = [$scope.file]; 
    }
});

$scope.alertData = function(){
	var fileSubmitted = $scope.files = [$scope.file.name];
	var petSubmitted = $scope.petName = [$scope.petName]
	alert('Thank you for submitting ' + fileSubmitted + ' for ' + petSubmitted);
}

$scope.upload = function (files) {
    if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (!file.$error) {
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                  file: file  
                }
            }).then(function (resp) {
                $timeout(function() {
                    $scope.log = 'file: ' +
                    resp.config.data.file.name +
                    ', Response: ' + JSON.stringify(resp.data) +
                    '\n' + $scope.log;
                });
            }, null, function (evt) {
                var progressPercentage = parseInt(100.0 *
                		evt.loaded / evt.total);
                $scope.log = 'progress: ' + progressPercentage + 
                	'% ' + evt.config.data.file.name + '\n' + 
                  $scope.log;
            });
          }
        }
    }
};


});
})();