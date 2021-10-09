var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.area = function () {
        var res = 3.14 * this.radius * this.radius;
        return res;
    };
    return circle;
}());
var rect = /** @class */ (function () {
    function rect(l, b) {
        this.l = l;
        this.b = b;
    }
    rect.prototype.area = function () {
        var res = this.l * this.b;
        return res;
    };
    return rect;
}());
//Normal approach
console.log("Normal Approach");
var obj1 = new circle(5);
console.log("area of circle:" + obj1.area());
var obj2 = new rect(6, 7);
console.log("area of rect:" + obj2.area());
console.log("**************");
//Polymorphism
console.log("Polymorphism");
var draw;
draw = new circle(5);
console.log("area of circle:" + draw.area());
draw = new rect(6, 7);
console.log("area of rect:" + draw.area());
