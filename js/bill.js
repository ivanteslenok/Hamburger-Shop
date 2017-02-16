var Bill = (function() {
	function Bill(hamburger) {
		this._body = $('#bill');
		this._billToppings = this._body.find('.billToppings');
		this._billStuffings = this._body.find('.billStuffings');
		this._billSize = this._body.find('#billSize');
		this._billPrice = this._body.find('#billPrice');
		this._billCount = this._body.find('#billCount');
		this._billTotal = this._body.find('#billTotal');

		this._hamburger = hamburger;
	}

	Bill.prototype._addIngredients = function(block, ingredients) {
		if (ingredients.length === 0) {
			block.children('td.name')
				.text('----')
				.end()
				.children('td.detail')
				.text('$-.--');

			return;
		}

		block.children('td.name')
			.text(ingredients[0].name)
			.end()
			.children('td.detail')
			.text('$' + ingredients[0].price.toFixed(2));

		if (ingredients.length > 1) {
			for (var i = 1; i < ingredients.length; i++) {
				var cloneBlock = block.clone();

				cloneBlock.children('td.name')
					.text(ingredients[i].name)
					.end()
					.children('td.detail')
					.text('$' + ingredients[i].price.toFixed(2))
					.end()
					.insertAfter(block);
			}
		}
	};

	Bill.prototype.createBill = function(count, totalPrice) {
		this._addIngredients(this._billToppings, this._hamburger.getToppings());
		this._addIngredients(this._billStuffings, this._hamburger.getStuffings());

		this._billSize.children('td.name')
			.text(this._hamburger.getSize().name)
			.end()
			.children('td.detail')
			.text('$' + this._hamburger.getSize().price.toFixed(2));

		this._billPrice.children('td.detail')
			.text('$' + this._hamburger.calculatePrice().toFixed(2));

		this._billCount.children('td.detail')
			.text(count);

		this._billTotal.children('td.detail')
			.text('$' + totalPrice.toFixed(2));
	};

	Bill.prototype.showBill = function() {
		this._body.show();
	};

	return Bill;
})();	