var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.display = function () {
        console.log("Name:" + this.name + " age:" + this.age);
    };
    return person;
}());
var customer = /** @class */ (function (_super) {
    __extends(customer, _super);
    function customer(name, age, custid) {
        var _this = _super.call(this, name, age) || this;
        _this.custid = custid;
        return _this;
    }
    customer.prototype.display = function () {
        console.log("Custid:" + this.custid);
        _super.prototype.display.call(this);
    };
    return customer;
}(person));
var cobj = new customer("john", 50, "C001");
cobj.display();
