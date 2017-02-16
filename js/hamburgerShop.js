var HamburgerShop = (function() {
    function HamburgerShop(size) {
        this._buyItButton = $('#buyItButton');

        this.hamburger = new Hamburger(size);
    }

    HamburgerShop.prototype.createShop = function() {
        var infoBlock = new InfoBlock(this.hamburger);
        var totalInfo = new TotalInfo(this.hamburger);
        var toppingMenu = new ToppingMenu();
        var stuffingMenu = new StuffingMenu();
        var toppingTable = new ToppingTable();
        var stuffingTable = new StuffingTable();
        var that = this;

        toppingMenu.createMenu();
        toppingMenu.onMenuItemClick(this.hamburger, toppingTable, infoBlock, totalInfo);

        stuffingMenu.createMenu();        
        stuffingMenu.onMenuItemClick(this.hamburger, stuffingTable, infoBlock, totalInfo);

        toppingTable.onTableItemButtonClick(this.hamburger, toppingMenu, infoBlock, totalInfo);

        stuffingTable.onTableItemButtonClick(this.hamburger, stuffingMenu, infoBlock, totalInfo);

        this._buyItButton.on('click', function() {
            this.disabled = true;
            var bill = new Bill(that.hamburger);

            bill.createBill(totalInfo.getCount(), totalInfo.getTotalPrice());
            bill.showBill();
        });
    };

    return HamburgerShop;
})();