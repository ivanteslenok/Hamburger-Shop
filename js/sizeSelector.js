var SizeSelector = (function() {
	function SizeSelector() {
		this._newHamburger = $('#newHamburger');
		this._hamburgerFilling = $('#hamburgerFilling');
	}

	SizeSelector.prototype.swapDivs = function() {
		this._newHamburger.css('display', 'none');
		this._hamburgerFilling.css('display', 'block');
	};

	SizeSelector.prototype.onSizeSelect = function(createHamburgerShop) {
		var size;
		var that = this;

		this._newHamburger.on('click', 'button', function(event) {
			var target = $(event.target);

			that.swapDivs();

			if (target.attr('id') === 'selectSmallSize') {
				size = Hamburger.SIZE_SMALL;
			} else if (target.attr('id') === 'selectLargeSize') {
				size = Hamburger.SIZE_LARGE;
			}

			createHamburgerShop(size);
		});
	};

	return SizeSelector;
})();	