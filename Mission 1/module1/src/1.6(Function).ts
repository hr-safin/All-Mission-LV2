// function in ts
{

function add(num1 : number, num2 : number) : number{
    return num1 + num2
}

add(2, 2)

const addArrow = (num1 : number, num2 :  number) : number =>  num1 + num2

// function refer to method in object

const poorUser = {
    name : "Hasibur Rahman Safin",
    balance : 0,
    addBalance(balance : number) : string{
        return `This is my new balance ${this.balance + balance}`
    }
}

const arr :  number[] = [12,23,43]

const multiArr : number[] = arr.map((elem : number) : number => elem * elem)


}