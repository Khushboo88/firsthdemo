angular.module('myApp',[])
.controller('myController', function myFunction($scope,$http){

$http.get("https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372")
		.then(function (response){
			$scope.a = response.data;
			console.log($scope.a[0]);
		});
});

