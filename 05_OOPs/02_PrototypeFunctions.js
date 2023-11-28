console.log('Learn about the prototypes in constructor functions');

//---------- Implment a constructor of the Bank
function Bank(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNo = Math.ceil(Date.now() * Math.random());

    /* 
    //  This will grab more storage, to removing more storage use prototype chaining 
    //--------Functions of constructor
    this.deposit = function(amount){ //deposity amount
        this.balance += amount;
    }

    this.withdraw = function(amount){
        this.balance -= amount;
    } 
    */
}
console.log(Bank.prototype)

Bank.prototype.deposit = function (amount) { //deposit amount
    this.balance += amount;
}
Bank.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

const RakeshAccount = new Bank('Rakes Sir', 1000);
const JohnAccount = new Bank('John Doe',1000);

RakeshAccount.deposit(+500);
JohnAccount.withdraw(+500);

//Both objects are take different memory storage
console.log(RakeshAccount, JohnAccount);
