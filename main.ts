let myName: string = "kilikili";
// myName = 35;

/*
    ** Type '35' is not assignable to type 'string'.
    처음에 myName 에 String 을 넣고 나서 다음에 Number값을 줄경우 오류를 반환한다.
    myName 의 type 이 String 으로 지정해놓게 되기 때문이다.

    ** 기본적으로 변수를 선언할 경우 옆에 : type 을 적어준다.
    ** 처음부터 type 을 지정해 주는것이 Ts 의 바람직한 형태이다.
 */

let myAge: any;
myAge = 27;
myAge = "스물 일곱";

/*
    myAge 값을 그냥 선언한 후 , 다른 값을 추가로 바꿔주면 바꿀 수 있다.
    하지만 이것은 Ts 가 선호하는 것을 지나치기 때문에 사용 X 
*/

// Array

let heroes: any = ["Superman", "Hulk", "IronMan"];
heroes = "Batman";

/*
    heroes: any[]   : any 값이 들어오지만 문자열 이여야함. 
    heroes: any     : any 값만을 넣었기 때문에 아무런 값이 다 들어올 수 있음

*/

// Tuple

let classB: [string, number] = ["Students", 20];
classB = ["Teachers", 1];

/*
    : [string, number] 라고 type 을 선언해 주었을 경우,
    값을 변환시킬때 [ String값 , Number값 ] 이렇게 순서에 맞게끔 넣어 줘야한다.
*/

// enum

enum Color {
  Blue,
  Green,
  Red,
}

let color1 = Color.Green;
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
let batmanCar: any = "K5";
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

// ****** function - function 에도 type이 있다. ****

// 1) function return type

function returnMyName(): string {
  // function 뒤에 return의 type을 적어준다.
  return myName;
}
console.log(returnMyName());

// 2) function argument types

function multiply(value1: number, value2: number): number {
  // arguments 에 type 을 지정해 줌으로써 오류를 방지할 수 있다.
  // type 과 다른 값을 넣을 경우 에러를 발생시킨다.
  return value1 * value2;
}

console.log(multiply(2, 3));

// 3) Function Types

let superMultiply: (a: number, b: number) => number;
// superMultipy 는 함수를 받는다.
// 함수에도 다양한 종류가 있기 때문에 받는 arguments와 return 값을 적어줌으로써 구분 해준다.

superMultiply = multiply;
let resultMultiply = multiply(4, 6);
console.log(resultMultiply);
console.log(superMultiply);
console.log(superMultiply(4, 5));
// superMultipy = returnMyName;
// returnMyName 은 위의 arguments 값과 return 값이 맞지 않아서 에러가 뜬다

// **** Types of Objects : Properties = key + value ****

type heroName = { name: string; age: number; address: string };
// type 을 생성하여 맞는 각각의 값에 type으로 넣어준다

// 추가로 key 와 value를 넣어 줄때는 넣는 값도 고쳐줘야 한다.
// heroName = { name: "Superman", age: 25 };
let heroOne: heroName = { name: "Batman", age: 22, address: "Godam" };
let heroTwo: heroName = { name: "Superman", age: 22, address: "Godam" };
let heroThree: heroName = { name: "Ironman", age: 22, address: "Godam" };

// **** Union Types ****

// Union Types 를 사용하여 여러가지의 타입을 추가할 수 있다.
let heroTeam: string[] | number[] | boolean[] = ["Superman", "Batman"];
heroTeam = [101, 102];
heroTeam = [false, true];

// **** Check Types : typeof ****

let finalWinner = "Batman";

if (typeof finalWinner == "string") {
  console.log(finalWinner);
}
