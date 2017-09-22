(function () {
	var app = angular.module('main', []).config(function ($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});
	
	app.controller('ContactController', ['$scope','$http', function ($scope,$http)
	 {
	    var form = this;
	    $scope.loading = true;
	    form.data = {};
		form.response = {};
		 this.sendMail = function () {
			 $http.post('/contact', form.data).success(function (res) {
				 console.log(res.status);
				 form.response = res;
			 }).error(function (res) {
				 console.log(res.status);
				 form.response = res;
			 });
			 form.data = {};
			 $scope.loading = false;
		 };
	 }]);
	
	
	
	
})();
