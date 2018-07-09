angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCamera) {

  // $scope.takePicture = function (options) {
    $scope.takePicture = function(){

      var options = {
          quality: 75,
          targetWidth: 200,
          targetHeight: 200,
          sourceType: 1
      };


      $cordovaCamera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;
      }, function(err) {
         console.log(err);
      });
    
    }



})

.controller('ChatsCtrl', function($scope, Chats) {
  

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
