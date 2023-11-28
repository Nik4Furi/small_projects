console.log('We are read about the data binding(Encapsulation) and data hiding (Abstraction)')

class Bank{
    customerName;
    #balance; // that will mean private variables
    account

    //----Constructor
    constructor(customerName,balance=0){
        this.account = Math.ceil(Date.now()*Math.random())
        this.customerName = customerName;
        this.#balance = balance
    }

    //------------Methods of class
    //in class, have sapertaly take care of the methods memory, will store in prototype storage
    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

}

//---------- Create a current account class
class CurrentAccount extends Bank {
    loanAmount ;

    constructor(customerName,balance=0,loan){
        super(customerName,balance);
        this.loanAmount = loan;
    }

}

//----------Initialize object
const NikAccount = new CurrentAccount('Nikhil',1000);
const JohnAccount = new CurrentAccount('John')

JohnAccount.deposit(+500);
NikAccount.withdraw(+500)

// console.log(JohnAccount.#balance) // will give error 

console.log(NikAccount,JohnAccount)