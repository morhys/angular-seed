'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){

		$scope.boolValue = false;
		$scope.snippet = '<span style="color:red;>hi there</span>';
		$scope.myStyle = {color: 'blue'};
		$scope.myclass = "blue";
		$scope.event = {
			name: 'Name of Event',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: '12 paxton terrace',
				postcode: 'sw1v3da'
			},
			imageUrl: 'img/AngularJS-small.png',
			sessions: [
				{
					name: 'first session',
					upVoteCount: 0
				},
				{
					name: 'second session',
					upVoteCount: 0
				},
				{
					name: 'third session',
					upVoteCount: 0
				}
			]
		}

		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
	}
);