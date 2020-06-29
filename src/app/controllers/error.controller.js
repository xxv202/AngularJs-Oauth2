(function (){
  'use strict';
  
  angular
  .module("mainApp")
  .controller("ErrorController", 
    function($scope, $uibModalInstance, error) {
        $scope.content = error.content;
        var time = error.time;
        $scope.title = error.title || "ERROR";
        setTimeout(()=>{
            $uibModalInstance.close({
                edit: 1
            });
        }, time);
   })

})();