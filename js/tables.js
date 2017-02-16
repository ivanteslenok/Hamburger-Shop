var ToppingTable = (function() {
	function ToppingTable() {
		this._table = $('#toppingTable');
		this._button = $('#toppingButton');
		this._tableRow = this.createTr();
	}

	ToppingTable.prototype.createTr = function() {
		var tr = $('<tr>');
		var tdNumber = $('<td>');
		var tdName = $('<td>');
		var tdPrice = $('<td>');
		var tdButton = $('<td>');
		var deleteButton = $('<button>');
		var span = $('<span>');

		deleteButton.addClass('btn btn-sm btn-danger');
		span.addClass('glyphicon glyphicon-remove');

		deleteButton.append(span)
			.appendTo(tdButton);

		tdNumber.addClass('tdNumber')
			.appendTo(tr);

		tdName.addClass('tdName')
			.appendTo(tr);

		tdPrice.addClass('tdPrice')
			.appendTo(tr);

		tdButton.appendTo(tr);

		return tr;
	};

	ToppingTable.prototype.numberOfTableItem = function() {
		this._table.children('tr')
			.find('.tdNumber')
			.each(function(index, el) {
				el.textContent = index + 1;
			});
	};

	ToppingTable.prototype.addItem = function(itemName, hamburger) {
		var addIngredient;

		for (i = 0; i < Hamburger.ALL_TOPPINGS.length; i++) {
			if (Hamburger.ALL_TOPPINGS[i].name === itemName) {
				addIngredient = Hamburger.ALL_TOPPINGS[i];
			}
		}

		hamburger.addTopping(addIngredient);

		return addIngredient;
	};

	ToppingTable.prototype.removeItem = function(itemName, hamburger) {
		var removeIngredient;

		for (i = 0; i < Hamburger.ALL_TOPPINGS.length; i++) {
			if (Hamburger.ALL_TOPPINGS[i].name === itemName) {
				removeIngredient = Hamburger.ALL_TOPPINGS[i];
			}
		}

		hamburger.removeTopping(removeIngredient);
	};

	ToppingTable.prototype.checkButton = function(hamburger) {
		if (hamburger.getToppings().length === Hamburger.ALL_TOPPINGS.length) {
			this._button.attr('disabled', true);
		} else {
			this._button.attr('disabled', false);
		}
	};

	ToppingTable.prototype.createTableItem = function(menuItem, hamburger) {
		var cloneTableRow = this._tableRow.clone();

		var ingredient = this.addItem(menuItem.text(), hamburger);

		this.checkButton(hamburger);

		this._table.append(cloneTableRow);

		this.numberOfTableItem();

		cloneTableRow.children('.tdName')
			.text(menuItem.text());

		cloneTableRow.children('.tdPrice')
			.text('$' + ingredient.price.toFixed(2));
	};

	ToppingTable.prototype.deleteTableItem = function(item, hamburger) {
		item.remove();

		this.removeItem(item.find('.tdName').text(), hamburger);

		this.numberOfTableItem();

		this.checkButton(hamburger);
	};

	ToppingTable.prototype.onTableItemButtonClick = function(hamburger, menu, infoBlock, totalInfo) {
		var that = this;

		this._table.on('click', 'button', function(event) {
	        var target = $(event.target);
	        var tableItem = target.closest('tr');

	        menu.createMenuItem(tableItem.children('.tdName').text());

	        that.deleteTableItem(tableItem, hamburger);

	        infoBlock.updateInfo();
	        totalInfo.updateTotalInfo();
	    });
	};

	return ToppingTable;
})();

var StuffingTable = (function() {
	function StuffingTable() {
		this._table = $('#stuffingTable');
		this._button = $('#stuffingButton');
		this._tableRow = this.createTr();
	}

	StuffingTable.prototype = Object.create(ToppingTable.prototype);

	StuffingTable.prototype.addItem = function(itemName, hamburger) {
		var addIngredient;

		for (i = 0; i < Hamburger.ALL_STUFFINGS.length; i++) {
			if (Hamburger.ALL_STUFFINGS[i].name === itemName) {
				addIngredient = Hamburger.ALL_STUFFINGS[i];
			}
		}

		hamburger.addStuffing(addIngredient);

		return addIngredient;
	};

	StuffingTable.prototype.removeItem = function(itemName, hamburger) {
		var removeIngredient;

		for (i = 0; i < Hamburger.ALL_STUFFINGS.length; i++) {
			if (Hamburger.ALL_STUFFINGS[i].name === itemName) {
				removeIngredient = Hamburger.ALL_STUFFINGS[i];
			}
		}

		hamburger.removeStuffing(removeIngredient);
	};

	StuffingTable.prototype.checkButton = function(hamburger) {
		if (hamburger.getStuffings().length === Hamburger.ALL_STUFFINGS.length ||
			hamburger.getStuffings().length === hamburger.getSize().maxSize) {
			this._button.attr('disabled', true);
		} else {
			this._button.attr('disabled', false);
		}
	};

	return StuffingTable;
})();