var Menu = (function() {
    function Menu() {}

    Menu.prototype.createLi = function() {
        return $('<li><a href="javascript:void(0)"></li>');
    };

    Menu.prototype.createMenuItem = function(itemName) {
        this._menuItem.clone()
            .children('a')
            .text(itemName)
            .end()
            .appendTo(this._$menu);
    };

    Menu.prototype.removeMenuItem = function(item) {
        item.remove();
    };

    Menu.prototype.onMenuItemClick = function(hamburger, table, infoBlock, totalInfo) {
        var that = this;

        this._$menu.on('click', 'a', function(event) {
            var target = $(event.target);

            that.removeMenuItem(target);

            table.createTableItem(target, hamburger);

            infoBlock.updateInfo();

            totalInfo.updateTotalInfo();
        });
    };

    return Menu;
})();

var ToppingMenu = (function() {
    function ToppingMenu() {
        this._$menu = $('#toppingMenu');
        this._menuItem = this.createLi();
    }

    ToppingMenu.prototype = Object.create(Menu.prototype);

    ToppingMenu.prototype.createMenu = function() {
        for (var i = 0; i < Hamburger.ALL_TOPPINGS.length; i++) {
            this.createMenuItem(Hamburger.ALL_TOPPINGS[i].name);
        }
    };

    return ToppingMenu;
})();

var StuffingMenu = (function() {
    function StuffingMenu() {
        this._$menu = $('#stuffingMenu');
        this._menuItem = this.createLi();
    }

    StuffingMenu.prototype = Object.create(Menu.prototype);

    StuffingMenu.prototype.createMenu = function() {
        for (var i = 0; i < Hamburger.ALL_STUFFINGS.length; i++) {
            this.createMenuItem(Hamburger.ALL_STUFFINGS[i].name);
        }
    };

    return StuffingMenu;
})();