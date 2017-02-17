var InfoBlock = (function() {
    function InfoBlock(hamburger) {
        var $size = $('#infoBlockSize');
        var $toppings = $('#infoBlockToppings');
        var $stuffings = $('#infoBlockStuffings');
        var $calories = $('#infoBlockCalories');
        var $price = $('#infoBlockPrice');

        this.updateInfo = function() {
            $size.text(hamburger.getSize().name);
            $toppings.text(hamburger.getToppings().length);
            $stuffings.text(hamburger.getStuffings().length);
            $calories.text(hamburger.calculateCalories());
            $price.text('$' + hamburger.calculatePrice().toFixed(2));
        };

        this.updateInfo();
    }

    return InfoBlock;
})();