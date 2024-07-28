"use strict";
// function in ts
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // function refer to method in object
    const poorUser = {
        name: "Hasibur Rahman Safin",
        balance: 0,
        addBalance(balance) {
            return `This is my new balance ${this.balance + balance}`;
        }
    };
    const arr = [12, 23, 43];
    const multiArr = arr.map((elem) => elem * elem);
}
