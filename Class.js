"use strict";
// type Hero = {
//   name: string;
//   age: number;
// };
// let hero3: Hero = {
//   name: "Superman",
//   age: 25,
// };
// let hero4: Hero = {
//   name: "Spiderman",
//   age: 22,
// };
/* 클래스의 형태  */
var Hero = /** @class */ (function () {
    function Hero(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hero;
}());
var hero3 = new Hero("Superman", 25);
console.log(hero3.name);
console.log(hero3.age);
/* (2) constructor 에 public 을 사용할 경우*/
var Hero2 = /** @class */ (function () {
    function Hero2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hero2;
}());
var hero4 = new Hero2("Superman", 25);
console.log(hero4.name);
console.log(hero4.age);
/* (3) constructor 에 private 를 사용할 경우 */
var Hero3 = /** @class */ (function () {
    function Hero3(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Hero3.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Hero3.prototype.password = function (arg1) {
        if (arg1 == 1234) {
            this.sendMoney();
        }
        else {
            console.log("Damm..");
        }
    };
    Hero3.prototype.sendMoney = function () {
        console.log(" Hi, mom this is month's salay");
    };
    return Hero3;
}());
var hero5 = new Hero3("Superman", 25);
// console.log(hero5.name);
// Property 'name' is private and only accessible within class 'Hero3'
// 위와 같이 private으로 접근하지 못할 경우 getName을 만들어서
// console.log(hero5.getName);
// console.log(hero5.age);
console.log(hero5.password(1234));
