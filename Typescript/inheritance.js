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
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Parent Class: " + this.id);
        console.log("Parent Class: " + this.name);
    };
    return Employee;
}());
var Lecture = /** @class */ (function (_super) {
    __extends(Lecture, _super);
    function Lecture(p_id, p_name, subject) {
        var _this = _super.call(this, p_id, p_name) || this;
        _this.subject = subject;
        return _this;
    }
    Lecture.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.subject);
    };
    return Lecture;
}(Employee));
var lec1 = new Lecture(256, 'Ashish', 'Java');
lec1.display();
var lec2 = new Lecture(313, 'Ravi', 'CSS');
lec2.display();
