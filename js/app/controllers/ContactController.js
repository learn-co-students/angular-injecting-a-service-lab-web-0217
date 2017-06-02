function ContactController($scope, $timeout) {
	$scope.name = 'Charles Samuels';

	$timeout(function() {
		$scope.name = 'Charles Albert Samuels'
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
