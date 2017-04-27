var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log("Hello from controller");

    $scope.pizzas = [];

    $scope.refresh = function(){
        $http.get('/getPizzas').then(function(response){
            console.log("I got the data I requested");
            $scope.pizzas = response.data;

        });


    };

    
    var autoRefresh = $interval(function(){
            $scope.refresh();
        }, 1000,10); //time elapse is 1 sec for 10 rounds

        $interval(function(){
            $scope.refresh();

    }, 5000); //then

    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/'+id).then(function(response){
            refresh();
        });

    };

}]);
