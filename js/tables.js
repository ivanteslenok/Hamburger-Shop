var Table = (function() {
	function Table() {}

	Table.prototype.createTr = function() {
		var tdNumber = $('<td>').addClass('tdNumber');
		var tdName = $('<td>').addClass('tdName');
		var tdPrice = $('<td>').addClass('tdPrice');
		var tdButton = $('<td>');
		var deleteButton = $('<button>').addClass('btn btn-sm btn-danger');
		var span = $('<span>').addClass('glyphicon glyphicon-remove');

		deleteButton.append(span)
			.appendTo(tdButton);

		return $('<tr>').append(tdNumber)
			.append(tdName)
			.append(tdPrice)
			.append(tdButton);
	};

	Table.prototype.numberOfTableItem = function() {
		this._$table.children('tr')
			.find('.tdNumber')
			.each(function(index, el) {
				$(el).text(index + 1);
			});
	};

	Table.prototype.createTableItem = function(menuItem, hamburger) {
		var ingredient = this.addItem(menuItem.text(), hamburger);

		this.checkButton(hamburger);

		this._tableRow.clone()
			.children('.tdName')
			.text(menuItem.text())
			.end()
			.children('.tdPrice')
			.text('$' + ingredient.price.toFixed(2))
			.end()
			.appendTo(this._$table);

		this.numberOfTableItem();
	};

	Table.prototype.deleteTableItem = function(item, hamburger) {
		item.remove();

		this.removeItem(item.find('.tdName').text(), hamburger);

		this.checkButton(hamburger);

		this.numberOfTableItem();
	};

	Table.prototype.onTableItemButtonClick = function(hamburger, menu, infoBlock, totalInfo) {
		var that = this;

		this._$table.on('click', 'button', function(event) {
			var target = $(event.target);
			var tableItem = target.closest('tr');

			menu.createMenuItem(tableItem.children('.tdName').text());

			that.deleteTableItem(tableItem, hamburger);

			infoBlock.updateInfo();

			totalInfo.updateTotalInfo();
		});
	};

	return Table;
})();

var ToppingTable = (function() {
	function ToppingTable() {
		this._$table = $('#toppingTable');
		this._$button = $('#toppingButton');
		this._tableRow = this.createTr();
	}

	ToppingTable.prototype = Object.create(Table.prototype);

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
			this._$button.attr('disabled', true);
		} else {
			this._$button.attr('disabled', false);
		}
	};

	return ToppingTable;
})();

var StuffingTable = (function() {
	function StuffingTable() {
		this._$table = $('#stuffingTable');
		this._$button = $('#stuffingButton');
		this._tableRow = this.createTr();
	}

	StuffingTable.prototype = Object.create(Table.prototype);

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
			this._$button.attr('disabled', true);
		} else {
			this._$button.attr('disabled', false);
		}
	};

	return StuffingTable;
})();