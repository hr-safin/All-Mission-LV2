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

        //Setter

        set addDeposite(amount : number){
            this._balance = this._balance + amount
        }

        // addDeposite(amount : number){
        //     this._balance = this._balance + amount
        // }

        //Getter
        get Balance(){
            return this._balance
        }

        // showBalance(){
        //     console.log(`The Balance is ${this._balance} Taka`)
        // }
    }

    

    const poorManAccount = new BankAccount(2324, "Mr Kashem", 100)
    // poorManAccount.addDeposite(300) // we r using like function
    // poorManAccount.showBalance()
   
    poorManAccount.addDeposite = 500
    const myBalance = poorManAccount.Balance // We e using as a property
    console.log(myBalance, "Taka")
    










}