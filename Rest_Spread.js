"use strict";
// Rest & Spread
// ...numbers 는 배열로 나오지 않고, 각각의 값을 하나하나 보여준다
// numbers : [ 1, 2, 3, 4, 5 ] | ...numbers : 1 2 3 4 5
var numbers = [1, 2, 3, 4, 5];
console.log.apply(console, numbers);
console.log(Math.max(1, 2, 3, 4, 5));
// ...numbers 를 사용함으로써 각각의 값(number값)을 보여주기 때문에 max가 작동한다.
console.log(Math.max.apply(Math, numbers));
// Rest ?
function totalWage(fixedPayment) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i in numbers) {
        sum += numbers[i];
    }
    return fixedPayment + sum;
}
// fixedPayment 의 값을 고정적으로 arguments로 부여하고
// 나머지 위의 값의 개수에 상관없이 사용할 수 있도록 spread(...) 연산자를 사용할 수 있다.
console.log(totalWage(50, 10, 20));
