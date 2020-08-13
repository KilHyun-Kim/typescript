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

class Hero {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let hero3 = new Hero("Superman", 25);
console.log(hero3.name);
console.log(hero3.age);

/* (2) constructor 에 public 을 사용할 경우*/

class Hero2 {
  constructor(public name: string, public age: number) {}
}
let hero4 = new Hero2("Superman", 25);
console.log(hero4.name);
console.log(hero4.age);

/* (3) constructor 에 private 를 사용할 경우 */

class Hero3 {
  constructor(private name: string, public age: number) {}

  get getName() {
    return this.name;
  }

  password(arg1: number) {
    if (arg1 == 1234) {
      this.sendMoney();
    } else {
      console.log("Damm..");
    }
  }

  private sendMoney() {
    console.log(" Hi, mom this is month's salay");
  }
}
let hero5 = new Hero3("Superman", 25);
// console.log(hero5.name);
// Property 'name' is private and only accessible within class 'Hero3'
// 위와 같이 private으로 접근하지 못할 경우 getName을 만들어서
// console.log(hero5.getName);

// console.log(hero5.age);
console.log(hero5.password(1234));
