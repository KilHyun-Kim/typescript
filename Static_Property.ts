// *** Static Property

class CalcConstants {
  PI: number = 3.14;
}
/* 기본적인 클래스 값 사용 방법 - 인스턴스를 만들어서 불러온다.*/
let calc1 = new CalcConstants();
console.log(calc1.PI);

/* 이 과정을 거치지 않고 사용하는 법? - static 을 주어서 바로 사용 가능 */

// 인스턴스에 포함되지않고 클래스 자체에서 사용 가능함 if) 인스턴스를 제작했을때는 사용 X
class CalcConstants2 {
  static PI: number = 3.14;

  static calcCircumference(diameter: number) {
    return diameter * this.PI;
  }
}
console.log(CalcConstants2.PI);

class CalcConstants3 {
  static PI: number = 3.14;

  static calcCircumference1(diameter: number) {
    return diameter * this.PI; // this. CalConstants
  }
  public calcCircumference2(diameter: number) {
    return diameter * CalcConstants3.PI; // this = instance of
  }
}
const calc2 = new CalcConstants3();
console.log(CalcConstants3.PI);
console.log(CalcConstants3.calcCircumference1(10));
console.log(calc2.calcCircumference2(10));
console.log(CalcConstants3.PI);

// *** Inheritance

class Base {
  hero: string = "Batman";
  action() {
    console.log("Driving Batcar");
  }
}

// extends 로 상속을 해줌으로써 instance로 만든 dev1 에서 hero값을 가져올 수 있다.
class Derived extends Base {
  // 똑같은 값이 있을 경우 상속을 받아도 자신의 값을 내보내 주게 된다
  hero: string = "Robin";
  action() {
    // super points to public or protected method.
    // super로 상속받은 action() 함수를 불러올 수 있으나, private일 경우에는 접근할 수 없다.(protected , public)
    super.action();
    console.log("Running");
  }
}

let dev1 = new Derived();
console.log(dev1.hero);
console.log(dev1.action());

// *** Private Constructor and Singletons

// Singletons ? 오직 하나의 인스턴스만 만드는 것
// DataType 이 Single 이다
class Single {
  // static means class property, not instance property
  static instance: Single;

  public readonly age: number = 25;
  private constructor(public name: string) {}
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single("Wonderwoman");
    }
    return Single.instance;
  }
}
// let singleOne = new Single("Catgirl");

// static의 getInstance() 를 호출함으로써 private constructor에 접근하여 인스턴스를 만들 수 있다.
let singleTwo = Single.getInstance();
let singleThree = Single.getInstance();
// 만들어진 두개의 것은 완전히 같다.

console.log(singleTwo.name);

// instance = data , memory in cpu, address
// variable is a pointer pointing a specific address .

// instance가 동일함으로 하나의 인스턴스를 두개가 갖고오기때문에
// singleTwo.name 을 바꾸면 singleThree.name이 바뀐다.

// *** readOnly Property ?

// readOnly 이므로 값을 할당할 수없다.
singleTwo.age = 22;
