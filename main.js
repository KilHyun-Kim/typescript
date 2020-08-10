"use strict";
var myName = "kilikili";
// myName = 35;
/*
    ** Type '35' is not assignable to type 'string'.
    처음에 myName 에 String 을 넣고 나서 다음에 Number값을 줄경우 오류를 반환한다.
    myName 의 type 이 String 으로 지정해놓게 되기 때문이다.

    ** 기본적으로 변수를 선언할 경우 옆에 : type 을 적어준다.
    ** 처음부터 type 을 지정해 주는것이 Ts 의 바람직한 형태이다.
 */
var myAge;
myAge = 27;
myAge = "스물 일곱";
/*
    myAge 값을 그냥 선언한 후 , 다른 값을 추가로 바꿔주면 바꿀 수 있다.
    하지만 이것은 Ts 가 선호하는 것을 지나치기 때문에 사용 X
*/
// Array
var heroes = ["Superman", "Hulk", "IronMan"];
heroes = "Batman";
/*
    heroes: any[]   : any 값이 들어오지만 문자열 이여야함.
    heroes: any     : any 값만을 넣었기 때문에 아무런 값이 다 들어올 수 있음

*/
// Tuple
var classB = ["Students", 20];
classB = ["Teachers", 1];
/*
    : [string, number] 라고 type 을 선언해 주었을 경우,
    값을 변환시킬때 [ String값 , Number값 ] 이렇게 순서에 맞게끔 넣어 줘야한다.
*/
// enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var color1 = Color.Green;
// console.log(color1);
/*
    enum 의 특징
    위의 Color 를 선언하고
    Color.Blue 의 값은 0
    Color.Green 의 값은 1
    Color.Red 의 값은 2
    -> 자리의 index 값이 반환됨
    
    <But>
    enum Color {
        Blue,
        Green = 10,
        Red,
    }
    이렇게 선언할 경우
    Color.Blue 의 값은 0
    Color.Green 의 값은 10
    Color.Red 의 값은 11
    -> enum 의 특징
    ( 값을 선언한 후 부터 +1 씩되며 값이 변한다 )
    ( 값을 선언하기 전의 Blue 는 0 을 반환한다)

*/
// any
var batmanCar = "K5";
console.log(batmanCar);
// K5 출력
batmanCar = { maker: "KIA", manufactured: 2020 };
console.log(batmanCar);
// { maker: "KIA", manufactured: 2020 } 출력
/*
    위의 batmanCar 를 선언하는 첫줄에서 타입을 설정해주지 않으면 변수에 들어가는 값을 보고
    자동적으로 string 변수라고 설정한다.

    그 후 string 값이 아닌 다른 값을 넣어주게 되면 Ts는 에러를 반환한다.

    But 처음 batmanCar 를 선언할 때 type 을 :any 라고 적어 줄 경우
    어떠한 값을 넣어도 에러를 반환하지 않는다.

    => 하지만 typescript 의 제작 의도와 다른 방향으로 진행되기 때문에,
    최대한 쓰지 않는 것이 좋다.
*/
