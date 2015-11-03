var app = angular.module('i18nApp', []);

app.controller('i18nController', function($scope, $http) {

	var lang = window.navigator.language;
	$scope.getMessages = function() {
		$http.get("/i18n-angular/msg/" + lang + ".json")
		.success(function (response) {
			$scope.msg = response;
		});
	};

	$scope.getMessages();

});
