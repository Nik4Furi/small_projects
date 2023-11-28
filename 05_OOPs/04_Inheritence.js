console.log('Inheritence one of the piller of OOPs, extends property from super class');

/*
//----------- How we apply inheritence in protype constructor
function Bank(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNo = Math.ceil(Date.now() * Math.random());
}

Bank.prototype.deposit = function (amount) { //deposit amount
    this.balance += amount;
}
Bank.prototype.withdraw = function (amount) {
    this.balance -= amount;

}

//----------- Create a new constructor function with inheritence
function CurrentAccount(customerName,balance=0,loan){
    Bank.call(this,customerName,balance);

    this.loanAmount = loan;
}

//--------- We can't directly get the protype function of Bank
//use special function
CurrentAccount.prototype = Object.create(Bank.prototype);

const RakeshAccount = new CurrentAccount('Rakes Sir', 1000,100);
const JohnAccount = new CurrentAccount('John Doe',1000,0);

RakeshAccount.deposit(+500);
JohnAccount.withdraw(+500);

//Both objects are take different memory storage
console.log(RakeshAccount, JohnAccount);
*/

//------------- Apply inheritence in class
// /*
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

console.log(NikAccount,JohnAccount)
// */