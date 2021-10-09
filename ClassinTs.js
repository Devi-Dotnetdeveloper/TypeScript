var calc = /** @class */ (function () {
    function calc(a1, b1) {
        this.a = a1;
        this.b = b1;
    }
    calc.prototype.sum = function () {
        this.res = this.a + this.b;
        return this.res;
    };
    calc.prototype.mult = function () {
        this.res = this.a * this.b;
        return this.res;
    };
    return calc;
}());
var obj = new calc(10, 20);
console.log(obj.sum(), obj.mult());
