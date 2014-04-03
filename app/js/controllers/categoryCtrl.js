'use strict';

four51.app.controller('CategoryCtrl', function ($routeParams, $sce, $scope, $451, Category, Product) {
	$scope.productLoadingIndicator = true;
	$scope.trusted = function(d){
		if(d) return $sce.trustAsHtml(d);
	}
	Product.search($routeParams.categoryInteropID, null, null, function(products) {
        $scope.products = products;
        angular.forEach($scope.products, function(p){
            p.Price = p.StandardPriceSchedule.PriceBreaks[0].Price;
        });
        angular.forEach($scope.products, function(n){
            n.pname = n.Name;
        });
        angular.forEach($scope.products, function(n){
            n.Number = n.InteropID;
        });
		$scope.productLoadingIndicator = false;
    });
    if ($routeParams.categoryInteropID) {
	    $scope.categoryLoadingIndicator = true;
        Category.get($routeParams.categoryInteropID, function(cat) {
            $scope.currentCategory = cat;
	        $scope.categoryLoadingIndicator = false;
        });
    }else if($scope.tree){
		$scope.currentCategory ={SubCategories:$scope.tree};
	}

	$scope.$on("treeComplete", function(data){
		if (!$routeParams.categoryInteropID) {
			$scope.currentCategory ={SubCategories:$scope.tree};
		}
	});

    $scope.filterDropdown = [
        {text:'Price Low to High', value: 'Price'},
        {text:'Price High to Low', value: '-Price'},
        {text:'Name', value: 'pname'},
        {text:'Item Number', value: 'Number'},
    ]
});