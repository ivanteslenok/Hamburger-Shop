$(function() {
    var selectSize = new SizeSelector();

    selectSize.onSizeSelect(createHamburgerShop);

    function createHamburgerShop(selectedSize) {
        var hamburgerShop = new HamburgerShop(selectedSize);

        hamburgerShop.createShop();
    }
});