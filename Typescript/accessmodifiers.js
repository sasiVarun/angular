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
var Student = /** @class */ (function () {
    function Student() {
        this.stdId = 101;
        this.stdName = 'Sasi';
        this.marks = 69;
    }
    Student.prototype.display = function () {
        console.log("Student Display");
        console.log(this.stdId);
        console.log(this.stdName);
        console.log(this.marks);
    };
    return Student;
}());
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.f1 = function () {
        var s1 = new Student();
        s1.display();
        s1.stdId;
    };
    return Test;
}());
var C1 = /** @class */ (function (_super) {
    __extends(C1, _super);
    function C1() {
        var _this = _super.call(this) || this;
        _this.marks;
        return _this;
    }
    return C1;
}(Student));
