"use strict";
var bankAccount = {
    money: 0,
    deposit: function (value) {
        this.money += value;
    },
};
var user_1 = {
    name: "Superman",
    bankAccount: bankAccount,
    hobbies: ["Flying", "Guitar"],
};
var user_2 = {
    name: "Batman",
    bankAccount: bankAccount,
    hobbies: ["Chasing Joker", "Driving Batcar"],
};
var user_3 = {
    name: "Spiderman",
    bankAccount: bankAccount,
    hobbies: ["1", "2"],
};
user_1.bankAccount.deposit(1500);
user_2.bankAccount.deposit(500);
user_3.bankAccount.deposit(2500);
user_1.bankAccount.deposit(3500);
var totlaBalance = user_1.bankAccount.money +
    user_2.bankAccount.money +
    user_3.bankAccount.money;
console.log(totlaBalance);
