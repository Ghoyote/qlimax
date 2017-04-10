(function () {
	var app = angular.module('main', []).config(function ($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});
	
	app.controller('ContactController', ['$http', function ($http)
	 {
	    var form = this;
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
		 };
	 }]);
	
	
	
	
})();
