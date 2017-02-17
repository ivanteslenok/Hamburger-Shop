var SizeSelector = (function() {
	function SizeSelector() {
		var $newHamburger = $('#newHamburger');
		var $hamburgerFilling = $('#hamburgerFilling');

		this.onSizeSelect = function(createHamburgerShop) {
			var size;

			$newHamburger.on('click', 'button', function(event) {
				var target = $(event.target);

				if (target.attr('id') === 'selectSmallSize') {
					size = Hamburger.SIZE_SMALL;
				} else if (target.attr('id') === 'selectLargeSize') {
					size = Hamburger.SIZE_LARGE;
				}
				
				$newHamburger.hide();				

				createHamburgerShop(size);

				$hamburgerFilling.show();
			});
		};
	}

	return SizeSelector;
})();	