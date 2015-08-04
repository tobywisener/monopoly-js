(function() {
	"use strict";
	
	var MonopolyGameWidget = require('./monopoly-game-widget');
	var MonopolyGameTask = require('./monopoly-game-task');
	
	var describeInDom = require('./dom-fixture').describeInDom;
	
	describeInDom('A Monopoly game widget', function (domContext) {
		var task;
		
		beforeEach(function () {
			task = MonopolyGameTask.start();
			MonopolyGameWidget.render(domContext.rootElement, task);
		});
		
		it('is rendered in the given container', function () {
			domContext.assertOneOf('.monopoly-game');
		});
		
		it('renders a new game button', function () {
			domContext.assertOneOf('button');
			domContext.assertText('button', 'New game');
		});
		
		it('clicking on the new game button creates a new game', function () {
			domContext.clickOn('button');
			
			task.statusChanged().take(1).subscribe(function (status) {
				expect(status.statusName).to.eql('configuring');
			});
		});
	});
}());