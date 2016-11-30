 // let's define the scotch controller that we call up in the about state
            routerApp.controller('InlineEditorController', function($scope) {

               	$scope.showtooltip = false;
                $scope.value = 'Edit me.';

                // Some helper functions that will be
                // available in the angular declarations

                $scope.hideTooltip = function(){

                    // When a model is changed, the view will be automatically
                    // updated by by AngularJS. In this case it will hide the tooltip.

                    $scope.showtooltip = false;
                }

                $scope.toggleTooltip = function(e){
                    e.stopPropagation();
                    $scope.showtooltip = !$scope.showtooltip;
                }

            });