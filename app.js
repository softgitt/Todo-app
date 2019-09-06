var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
  $scope.collection = [
      {tilte:"Please add you list below"}
    ];
   $scope.addTodo = function(){
       $scope.collection.push({tilte: $scope.newData});
       $scope.newData = '';
   }
   $scope.removeData = function(){
       
      $scope.collection = $scope.collection.filter(function(item){
         return!item.done;
      })   
   }
});