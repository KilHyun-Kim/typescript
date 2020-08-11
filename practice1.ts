let bankAccount = {
  money: 0,
  deposit(value: number): void {
    this.money += value;
  },
};

type User = {
  name: string;
  bankAccount: {
    money: number;
    deposit(value: number): void;
  };
  hobbies: string[];
};
let user_1: User = {
  name: "Superman",
  bankAccount: bankAccount,
  hobbies: ["Flying", "Guitar"],
};

let user_2: User = {
  name: "Batman",
  bankAccount: bankAccount,
  hobbies: ["Chasing Joker", "Driving Batcar"],
};

let user_3: User = {
  name: "Spiderman",
  bankAccount: bankAccount,
  hobbies: ["1", "2"],
};
user_1.bankAccount.deposit(1500);
user_2.bankAccount.deposit(500);
user_3.bankAccount.deposit(2500);
user_1.bankAccount.deposit(3500);
let totlaBalance: number =
  user_1.bankAccount.money +
  user_2.bankAccount.money +
  user_3.bankAccount.money;

console.log(totlaBalance);
