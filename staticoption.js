var employee = /** @class */ (function () {
    function employee(empno) {
        this._empno = empno;
    }
    Object.defineProperty(employee.prototype, "sal", {
        get: function () {
            return this._sal;
        },
        //property declaration
        set: function (sal1) {
            this._sal = sal1;
            this._da = sal1 * 0.4;
        },
        enumerable: false,
        configurable: true
    });
    employee.prototype.display = function () {
        console.log(this._empno, this._sal, this._da);
    };
    return employee;
}());
var eobj = new employee(100);
eobj.sal = 10000;
eobj.display();
eobj.sal = eobj.sal + 5000;
eobj.display();
