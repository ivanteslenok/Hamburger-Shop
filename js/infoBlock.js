var InfoBlock = (function() {
    function InfoBlock(hamburger) {
        this._size = $('#infoBlockSize');
        this._toppings = $('#infoBlockToppings');
        this._stuffings = $('#infoBlockStuffings');
        this._calories = $('#infoBlockCalories');
        this._price = $('#infoBlockPrice');

        this._hamburger = hamburger;

        this.updateInfo();
    }

    InfoBlock.prototype.updateInfo = function() {
        this._size.text(this._hamburger.getSize().name);
        this._toppings.text(this._hamburger.getToppings().length);
        this._stuffings.text(this._hamburger.getStuffings().length);
        this._calories.text(this._hamburger.calculateCalories());
        this._price.text('$' + this._hamburger.calculatePrice().toFixed(2));
    };

    return InfoBlock;
})();