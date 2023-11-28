console.log('Welcome to start learn about the classes');

// Like we create function expression, same like we can create class expression
//ex- const Bank = class{ /body of class/ }

class Bank{
    customerName;
    balance;
    account

    //----Constructor
    constructor(customerName,balance=0){
        this.account = Math.ceil(Date.now()*Math.random())
        this.customerName = customerName;
        this.balance = balance
    }

    //------------Methods of class
    //in class, have sapertaly take care of the methods memory, will store in prototype storage
    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

}

//----------Initialize object
const NikAccount = new Bank('Nikhil',1000);
const JohnAccount = new Bank('John')

JohnAccount.deposit(+500);
NikAccount.withdraw(+500)

console.log(NikAccount,JohnAccount)