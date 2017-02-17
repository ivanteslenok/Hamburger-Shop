var Bill = (function() {
	function Bill(hamburger) {
		var $body = $('#bill');
		var $billToppings = $body.find('.billToppings');
		var $billStuffings = $body.find('.billStuffings');
		var $billSize = $body.find('#billSize');
		var $billPrice = $body.find('#billPrice');
		var $billCount = $body.find('#billCount');
		var $billTotal = $body.find('#billTotal');

		var addIngredients = function(block, ingredients) {
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

		this.createBill = function(count, totalPrice) {
			addIngredients($billToppings, hamburger.getToppings());
			addIngredients($billStuffings, hamburger.getStuffings());

			$billSize.children('td.name')
				.text(hamburger.getSize().name)
				.end()
				.children('td.detail')
				.text('$' + hamburger.getSize().price.toFixed(2));

			$billPrice.children('td.detail')
				.text('$' + hamburger.calculatePrice().toFixed(2));

			$billCount.children('td.detail')
				.text(count);

			$billTotal.children('td.detail')
				.text('$' + totalPrice.toFixed(2));
		};

		this.showBill = function() {
			$body.show();
		};
	}

	return Bill;
})();	