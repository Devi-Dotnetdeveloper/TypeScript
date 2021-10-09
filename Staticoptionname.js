var employee = /** @class */ (function () {
    function employee() {
    }
    Object.defineProperty(employee.prototype, "eno", {
        get: function () {
            return this._empno;
        },
        //property declaration
        set: function (empno) {
            this._empno = empno;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(employee.prototype, "ename", {
        get: function () {
            return this._empname;
        },
        set: function (empname) {
            this._empname = empname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(employee.prototype, "sal", {
        get: function () {
            return this._sal;
        },
        set: function (sal1) {
            this._sal = sal1;
        },
        enumerable: false,
        configurable: true
    });
    employee.prototype.display = function () {
        console.log(this._empname, this._empno, this._sal);
    };
    return employee;
}());
var eobj = new employee();
eobj.eno = 1;
eobj.ename = "John";
eobj.sal = 20000;
eobj.display();
eobj.eno = 2;
eobj.ename = "Peter";
eobj.sal = eobj.sal + 5000;
eobj.display();
