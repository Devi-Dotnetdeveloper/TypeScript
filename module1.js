"use strict";
exports.__esModule = true;
exports.product = exports.category = void 0;
// export namespace inventory{
var category = /** @class */ (function () {
    function category(cateid, catename) {
        this.cateid = cateid;
        this.catename = catename;
    }
    category.prototype.display = function () {
        console.log("Cateid:" + this.cateid + " Catename:" + this.catename);
    };
    return category;
}());
exports.category = category;
var product = /** @class */ (function () {
    function product(prodid, prodname) {
        this.prodid = prodid;
        this.prodname = prodname;
    }
    product.prototype.display = function () {
        console.log("prodid:" + this.prodid + " prodname:" + this.prodname);
    };
    return product;
}());
exports.product = product;
// }
