(function(){
  'use strict';

  angular.module('CheckTheLunch', [])

  .controller('CheckController', CheckController);

  CheckController.$inject = ['$scope'];

  function CheckController($scope){
    $scope.name = "";
    $scope.totalValue = "Let's take a glance for your result! Press button :)";
    $scope.style = "secondary";
    $scope.hint = "Text list separated with commas.";
    $scope.hintStyle = "text-muted";

    $scope.check = function (){
      var count = countTheLunch($scope.name);
      $scope.totalValue = count;
    }

    function countTheLunch(string){
      if (string == "") {
        $scope.hint = "Please enter data first.";
        $scope.hintStyle = "text-danger";
        return totalValue;
      };

      if (string.split(',').length <=3 ) {
        $scope.style="success";
        return "Enjoy";
      } else {
        $scope.style="danger";
        return "Too much";
      };
    }

  }


})()
