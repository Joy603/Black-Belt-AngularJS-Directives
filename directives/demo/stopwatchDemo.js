angular.module('AngularBlackBelt.StopWatchDemo', [])
.controller('demoStopwatchCtrl', ['$scope', function($scope){
    $scope.stopwatches = [{interval: 100, log: []}, {interval: 1000, log: []}, {interval: 2000, log: []}];
}]);