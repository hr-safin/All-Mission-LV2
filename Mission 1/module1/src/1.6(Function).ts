// function in ts
{

function add(num1 : number, num2 : number) : number{
    return num1 + num2
}
add(2, 2)

function add2(num1 : number, num2:number) : number{
    return num1 + num2
}
add2(2,2)

const addArrow = (num1 : number, num2 :  number) : number =>  num1 + num2
const addArrow2 = (num1 : number, num2 : number)  : number=> num1 + num2

// function refer to method in object

const poorUser = {
    name : "Hasibur Rahman Safin",
    balance : 0,
    addBalance(balance : number) : string{
        return `This is my new balance ${this.balance + balance}`
    }
}

const normalUser = {
    name : "Hasibur Rahman Safin",
    balance : 0,
    addBalance(balance : number) : string{
        return `This is my new balance ${this.balance + balance}`
    }
}

const arr :  number[] = [12,23,43]
const arr2 : number[] = [1,2,3,4,5,6]

const multiArr : number[] = arr.map((elem : number) : number => elem * elem)
const squareArr : number[] = arr2.map((elem : number) : number => elem * elem)

}