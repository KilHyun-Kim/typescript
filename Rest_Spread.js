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
function totalWage(numbers) {
    var sum = 0;
    for (var i in numbers) {
        sum += numbers[i];
    }
    return sum;
}
console.log(totalWage([10, 20]));
