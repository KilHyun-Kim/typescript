"use strict";
// *** Static Property
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CalcConstants = /** @class */ (function () {
    function CalcConstants() {
        this.PI = 3.14;
    }
    return CalcConstants;
}());
/* 기본적인 클래스 값 사용 방법 - 인스턴스를 만들어서 불러온다.*/
var calc1 = new CalcConstants();
console.log(calc1.PI);
/* 이 과정을 거치지 않고 사용하는 법? - static 을 주어서 바로 사용 가능 */
// 인스턴스에 포함되지않고 클래스 자체에서 사용 가능함 if) 인스턴스를 제작했을때는 사용 X
var CalcConstants2 = /** @class */ (function () {
    function CalcConstants2() {
    }
    CalcConstants2.calcCircumference = function (diameter) {
        return diameter * this.PI;
    };
    CalcConstants2.PI = 3.14;
    return CalcConstants2;
}());
console.log(CalcConstants2.PI);
var CalcConstants3 = /** @class */ (function () {
    function CalcConstants3() {
    }
    CalcConstants3.calcCircumference1 = function (diameter) {
        return diameter * this.PI; // this. CalConstants
    };
    CalcConstants3.prototype.calcCircumference2 = function (diameter) {
        return diameter * CalcConstants3.PI; // this = instance of
    };
    CalcConstants3.PI = 3.14;
    return CalcConstants3;
}());
var calc2 = new CalcConstants3();
console.log(CalcConstants3.PI);
console.log(CalcConstants3.calcCircumference1(10));
console.log(calc2.calcCircumference2(10));
console.log(CalcConstants3.PI);
// *** Inheritance
var Base = /** @class */ (function () {
    function Base() {
        this.hero = "Batman";
    }
    Base.prototype.action = function () {
        console.log("Driving Batcar");
    };
    return Base;
}());
// extends 로 상속을 해줌으로써 instance로 만든 dev1 에서 hero값을 가져올 수 있다.
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 똑같은 값이 있을 경우 상속을 받아도 자신의 값을 내보내 주게 된다
        _this.hero = "Robin";
        return _this;
    }
    Derived.prototype.action = function () {
        // super points to public or protected method.
        // super로 상속받은 action() 함수를 불러올 수 있으나, private일 경우에는 접근할 수 없다.(protected , public)
        _super.prototype.action.call(this);
        console.log("Running");
    };
    return Derived;
}(Base));
var dev1 = new Derived();
console.log(dev1.hero);
console.log(dev1.action());
// *** Private Constructor and Singletons
// Singletons ? 오직 하나의 인스턴스만 만드는 것
// DataType 이 Single 이다
var Single = /** @class */ (function () {
    function Single(name) {
        this.name = name;
        this.age = 25;
    }
    Single.getInstance = function () {
        if (!Single.instance) {
            Single.instance = new Single("Wonderwoman");
        }
        return Single.instance;
    };
    return Single;
}());
// let singleOne = new Single("Catgirl");
// static의 getInstance() 를 호출함으로써 private constructor에 접근하여 인스턴스를 만들 수 있다.
var singleTwo = Single.getInstance();
var singleThree = Single.getInstance();
// 만들어진 두개의 것은 완전히 같다.
console.log(singleTwo.name);
// instance = data , memory in cpu, address
// variable is a pointer pointing a specific address .
// instance가 동일함으로 하나의 인스턴스를 두개가 갖고오기때문에
// singleTwo.name 을 바꾸면 singleThree.name이 바뀐다.
// *** readOnly Property ?
// readOnly 이므로 값을 할당할 수없다.
singleTwo.age = 22;
