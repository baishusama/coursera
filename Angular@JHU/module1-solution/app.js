(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller("LunchCheckerController", LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController ($scope) {
    $scope.menu = "";
    $scope.message = "";

    $scope.checkLunch = function () {
      function getItemNum () {
        if($scope.menu.length === 0) return 0;

        return $scope.menu.split(',').filter(function (elem) {
          return /\S/.test(elem);
        }).length;
      }

      var num = getItemNum();

      // if(num === 0){
      //   $scope.message = "Please enter data first";
      // } else if (num > 3){
      //   $scope.message = "Too Much!";
      // } else {
      //   $scope.message = "Enjoy!";
      // }
      $scope.message = (num === 0 && "Please enter data first") || (num > 3 && "Too Much!") || "Enjoy!";
    };
  };
})();
