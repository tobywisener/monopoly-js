(function() {
	"use strict";
	
	var Square = require('./square');
	var BoardWidget = require('./board-widget');
	
	var describeInDom = require('./dom-fixture').describeInDom;
		
	describeInDom('A Board Widget', function (domContext) {
		beforeEach(function () {
			BoardWidget.render(domContext.rootElement, Square.SQUARES);
		});
		
		it('is rendered in the correct div', function () {
			domContext.assertOneOf('.monopoly-board');
		});
		
		it('renders 4 rows', function () {
			domContext.assertElementCount('.monopoly-row', 4);
		});
		
		it('renders all the squares', function () {
			domContext.assertElementCount('.monopoly-row > .monopoly-square', Square.SQUARES.length);
		});
	});
}());