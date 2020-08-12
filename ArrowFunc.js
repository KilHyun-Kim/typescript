"use strict";
// Arrow Functions
// 함수 : 그는 다만 하나의 몸짓에 지나지 않는다, 누군가가 나를 불러주었을때, 나에게로 와서 꽃이 되었다.
function multiply1(number1, number2) {
    return number1 + number2;
}
// Anonymous Functions
var multiply2 = function (number1, number2) {
    return number1 + number2;
};
// Arrow Func 위와 동일한 함수이다 ES6 문법이다
var multiply3 = function (number1, number2) { return number1 + number2; };
console.log(multiply1(3, 5));
console.log(multiply2(3, 50));
console.log(multiply3(3, 50));
