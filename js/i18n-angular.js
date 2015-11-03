/**
 * i18n-angular
 * Internacionalização (i18n) com Angular usando arquivos de mensagens JSON
 * 
 * Repositório
 * https://github.com/seniocaires/i18n-angular
 * 
 * Os commits são publicados automaticamente na página
 * http://seniocaires.github.io/i18n-angular
 * 
 * @author Senio Caires
 */
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
