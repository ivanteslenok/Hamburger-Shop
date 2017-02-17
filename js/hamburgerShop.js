var HamburgerShop = (function() {
    function HamburgerShop(size) {
        var $buyItButton = $('#buyItButton');

        var hamburger = new Hamburger(size);

        this.createShop = function() {
            var infoBlock = new InfoBlock(hamburger);
            var totalInfo = new TotalInfo(hamburger);
            var toppingMenu = new ToppingMenu();
            var stuffingMenu = new StuffingMenu();
            var toppingTable = new ToppingTable();
            var stuffingTable = new StuffingTable();

            toppingMenu.createMenu();
            toppingMenu.onMenuItemClick(hamburger, toppingTable, infoBlock, totalInfo);

            stuffingMenu.createMenu();        
            stuffingMenu.onMenuItemClick(hamburger, stuffingTable, infoBlock, totalInfo);

            toppingTable.onTableItemButtonClick(hamburger, toppingMenu, infoBlock, totalInfo);

            stuffingTable.onTableItemButtonClick(hamburger, stuffingMenu, infoBlock, totalInfo);

            $buyItButton.on('click', function() {
                this.disabled = true;
                var bill = new Bill(hamburger);

                bill.createBill(totalInfo.getCount(), totalInfo.getTotalPrice());
                bill.showBill();
            });
        };
    }

    return HamburgerShop;
})();