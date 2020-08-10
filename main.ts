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
