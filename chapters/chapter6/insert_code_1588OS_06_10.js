app.directive('bbPhoneDetails', ['phoneService', function(phoneService){

    function link(scope,element,attrs,controller){
      
      scope.$watch('config', function(config){
        phoneService.getPhone(config).success(function(data) {
          scope.phone = data;
       }).error(function(){
          scope.phone = {error: 'no file exists'};
       });
      },true); 
       
    }
    
    return {
        restrict: 'A',
        templateUrl: function(tElem,tAttrs){
          return tAttrs.templateUrl || 'phoneDetails.tpl.html';
        },
        scope: {config: '='},
        link: link
    };
    
}]);