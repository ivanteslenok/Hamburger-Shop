var ToppingMenu = (function() {
    function ToppingMenu() {
        this._menu = $('#toppingMenu');
        this._menuItem = this.createLi();
    }

    ToppingMenu.prototype.createLi = function() {
        var li = $('<li>');
        var a = $('<a>');

        a.attr('href', 'javascript:void(0)')
            .appendTo(li);

        return li;
    };

    ToppingMenu.prototype.createMenuItem = function(itemName) {
        var cloneMenuItem = this._menuItem.clone();

        cloneMenuItem.children('a')
            .text(itemName);

        this._menu.append(cloneMenuItem);
    };

    ToppingMenu.prototype.removeMenuItem = function(item) {
        item.remove();
    };

    ToppingMenu.prototype.createMenu = function() {
        for (var i = 0; i < Hamburger.ALL_TOPPINGS.length; i++) {
            this.createMenuItem(Hamburger.ALL_TOPPINGS[i].name);
        }
    };

    ToppingMenu.prototype.onMenuItemClick = function(hamburger, table, infoBlock, totalInfo) {
        var that = this;

        this._menu.on('click', 'a', function(event) {
            var target = $(event.target);

            that.removeMenuItem(target);

            table.createTableItem(target, hamburger);

            infoBlock.updateInfo();
            totalInfo.updateTotalInfo();
        });
    };

    return ToppingMenu;
})();

var StuffingMenu = (function() {
    function StuffingMenu() {
        this._menu = $('#stuffingMenu');
        this._menuItem = this.createLi();
    }

    StuffingMenu.prototype = Object.create(ToppingMenu.prototype);

    StuffingMenu.prototype.createMenu = function() {
        for (var i = 0; i < Hamburger.ALL_STUFFINGS.length; i++) {
            this.createMenuItem(Hamburger.ALL_STUFFINGS[i].name);
        }
    };

    return StuffingMenu;
})();