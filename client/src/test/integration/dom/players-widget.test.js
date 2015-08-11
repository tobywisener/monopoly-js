(function() {
	"use strict";
	
	var Board = require('./board');
	var PlayersWidget = require('./players-widget');
	var PlayGameTask = require('./play-game-task');
	
	var testPlayers = require('./test-players');
	var describeInDom = require('./dom-fixture').describeInDom;
	
	describeInDom('A Players widget', function (domContext) {
		beforeEach(function () {
			var task = PlayGameTask.start(Board.SQUARES, testPlayers.PLAYERS);
			PlayersWidget.render(domContext.rootElement, task.players());
		});
		
		it('is rendered in the given container', function () {
			domContext.assertOneOf('.monopoly-players');
		});
		
		it('renders a pane for each player', function () {
			domContext.assertElementCount('.player-panel', testPlayers.PLAYERS.length);
		});
	});
}());