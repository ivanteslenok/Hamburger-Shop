var TotalInfo = (function() {
    function TotalInfo(hamburger) {
        this._totalPrice = $('#totalPrice');
        this._count = $('#count');
        this._hamburger = hamburger;
        var that = this;

        this._count.on('input', function() {
            if (that._count.val() < 1) {
                that._count.val(1);
            } else if (that._count.val() > 50) {
                that._count.val(50);
            }
        });

        this._count.on('blur', function() {
            that.updateTotalInfo();
        });

        this.updateTotalInfo();
    }

    TotalInfo.prototype = {
        calculateTotalPrice: function() {
            return this._hamburger.calculatePrice() * this._count.val();
        },

        updateTotalInfo: function() {
            this._totalPrice.text('$' + this.calculateTotalPrice().toFixed(2));
        },

        getCount: function() {
            return this._count.val();
        },

        getTotalPrice: function() {
            return this.calculateTotalPrice();
        }
    };

    return TotalInfo;
})();