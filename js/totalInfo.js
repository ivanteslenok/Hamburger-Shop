var TotalInfo = (function() {
    function TotalInfo(hamburger) {
        var $totalPrice = $('#totalPrice');
        var $count = $('#count');
        var that = this;

        var calculateTotalPrice = function() {
            return hamburger.calculatePrice() * $count.val();
        };

        this.updateTotalInfo = function() {
            $totalPrice.text('$' + calculateTotalPrice().toFixed(2));
        };

        this.getCount = function() {
            return $count.val();
        };

        this.getTotalPrice = function() {
            return calculateTotalPrice();
        };

        $count.on('input', function() {
            if ($count.val() < 1) {
                $count.val(1);
            } else if ($count.val() > 50) {
                $count.val(50);
            }
        });

        $count.on('blur', function() {
            that.updateTotalInfo();
        });

        this.updateTotalInfo();
    }

    return TotalInfo;
})();