var Hamburger = (function() {
    function Hamburger(size) {
        this._arrayStuffing = [];
        this._arrayTopping = [];
        this._size = size;
    }

    Hamburger.prototype.addStuffing = function(stuffing) {
        if (this._arrayStuffing.length + 1 <= this._size.maxSize &&
            this._arrayStuffing.indexOf(stuffing) === -1) {
            this._arrayStuffing.push(stuffing);
        }
    };

    Hamburger.prototype.addTopping = function(topping) {
        if (this._arrayTopping.indexOf(topping) === -1) {
            this._arrayTopping.push(topping);
        }
    };

    Hamburger.prototype.removeStuffing = function(stuffing) {
        var indexStuffing = this._arrayStuffing.indexOf(stuffing);

        if (indexStuffing >= 0) {
            this._arrayStuffing.splice(indexStuffing, 1);
        }
    };

    Hamburger.prototype.removeTopping = function(topping) {
        var indexTopping = this._arrayTopping.indexOf(topping);

        if (indexTopping >= 0) {
            this._arrayTopping.splice(indexTopping, 1);
        }
    };

    Hamburger.prototype.getSize = function() {
        return this._size;
    };

    Hamburger.prototype.getStuffings = function() {
        return this._arrayStuffing;
    };

    Hamburger.prototype.getToppings = function() {
        return this._arrayTopping;
    };

    Hamburger.prototype.calculateCalories = function() {
        if (this._arrayStuffing.length !== 0 || this._arrayTopping.length !== 0) {
            return this._arrayStuffing.concat(this._arrayTopping).map(function(a) {
                return a.calories;
            }).reduce(function(a, b) {
                return a + b;
            }) + this._size.calories;
        }

        return this._size.calories;
    };

    Hamburger.prototype.calculatePrice = function() {
        if (this._arrayStuffing.length !== 0 || this._arrayTopping.length !== 0) {
            return this._arrayStuffing.concat(this._arrayTopping).map(function(a) {
                return a.price;
            }).reduce(function(a, b) {
                return a + b;
            }) + this._size.price;
        }

        return this._size.price;
    };

    Hamburger.SIZE_SMALL = {
        calories: 2,
        price: 1,
        maxSize: 5,
        name: 'Small'
    };
    Hamburger.SIZE_LARGE = {
        calories: 4,
        price: 2,
        maxSize: 10,
        name: 'Large'
    };

    Hamburger.STUFFING_CHEESE = {
        name: 'Cheese',
        calories: 12,
        price: 4
    };
    Hamburger.STUFFING_SALAD = {
        name: 'Salad',
        calories: 3,
        price: 3
    };
    Hamburger.STUFFING_POTATO = {
        name: 'Potato',
        calories: 8,
        price: 5
    };
    Hamburger.STUFFING_CUTLET = {
        name: 'Cutlet',
        calories: 20,
        price: 19
    };
    Hamburger.STUFFING_CUCUMBER = {
        name: 'Cucumber',
        calories: 5,
        price: 5
    };
    Hamburger.STUFFING_TOMATO = {
        name: 'Tomato',
        calories: 4,
        price: 7
    };
    Hamburger.STUFFING_ONION = {
        name: 'Onion',
        calories: 1,
        price: 2
    };

    Hamburger.ALL_STUFFINGS = [
        Hamburger.STUFFING_CHEESE,
        Hamburger.STUFFING_SALAD,
        Hamburger.STUFFING_POTATO,
        Hamburger.STUFFING_CUTLET,
        Hamburger.STUFFING_CUCUMBER,
        Hamburger.STUFFING_TOMATO,
        Hamburger.STUFFING_ONION
    ];

    Hamburger.TOPPING_MAYO = {
        name: 'Mayo',
        calories: 7,
        price: 2
    };
    Hamburger.TOPPING_KETCHUP = {
        name: 'Ketchup',
        calories: 12,
        price: 6
    };
    Hamburger.TOPPING_SPICE = {
        name: 'Spice',
        calories: 6,
        price: 3
    };
    Hamburger.TOPPING_SAUCE = {
        name: 'Sauce',
        calories: 8,
        price: 5
    };

    Hamburger.ALL_TOPPINGS = [
        Hamburger.TOPPING_MAYO,
        Hamburger.TOPPING_KETCHUP,
        Hamburger.TOPPING_SPICE,
        Hamburger.TOPPING_SAUCE
    ];

    return Hamburger;
})();