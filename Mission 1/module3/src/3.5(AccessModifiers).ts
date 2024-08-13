{
    // Access Modifiers

    class BankAccount{
        public readonly id : number;
        public name : string;
       // private _balance : number;
       protected _balance : number;

        constructor(id : number, name : string, balance : number){
            this.id = id
            this.name = name
            this._balance = balance
        }

        addDeposite(amount : number){
            this._balance = this._balance + amount
        }

        showBalance(){
            console.log(`The Balance is ${this._balance} Taka`)
        }
    }

    class StudentAccount extends BankAccount{

        test(){
            this._balance
        }
    }

    const poorManAccount = new BankAccount(2324, "Mr Kashem", 100)
    poorManAccount.addDeposite(300)
    poorManAccount.showBalance()
    










}