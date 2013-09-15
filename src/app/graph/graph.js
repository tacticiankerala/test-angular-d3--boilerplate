GraphModule = angular.module('toDo.graphModule', ['ui.state','titleService'])
.run(function(titleService){
	titleService.setTitle( 'Graph' );
})
.factory('dataset', function () {
	var datas = [
	{year: 1990, gdp: 10},
	{year: 1995, gdp: 15},
	{year: 2000, gdp: 25},
	{year: 2005, gdp: 17},
	{year: 2010, gdp: 20}
	];

	return datas;
})
.directive("gdpgraph",function(){
	return {
		restrict: "E",
		scope: {},
		controller: function($scope,$element,dataset){
			
			var width = 500, height = 500;
			var svg = d3.select($element[0]).append('svg').attr("width",width).attr("height",height);
			var circles = svg.selectAll("circle").data(dataset).enter().append("circle");
			circles.attr('fill','green');
			circles.attr("cx", function(d, i) {
				return (i * 50) + 25;
			})
			.attr("cy", height/2)
			.attr("r", function(d) {
				return d.gdp;
			});
		}
	};
})
.config(function config($stateProvider) {
	$stateProvider.state('graph', {
		url: '/graph',
		views: {
			"graph-view": {
				templateUrl: 'graph/graph.tpl.html',
				controller: "GraphController"
			}
		}
	});
})

.controller("GraphController",["$scope", function($scope){

}])
;