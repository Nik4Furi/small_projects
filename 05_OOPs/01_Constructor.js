console.log('Start to learn about constructor');
console.log('See/learn how DRY principle implement without classes');

//---------- Implment a constructor of the Bank
function Bank(customerName,balance=0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNo = Math.ceil(Date.now()*Math.random());
}

//------------ Grab the data from frontend
const name = document.getElementById('name');
const amount = document.getElementById('amount');
const createAccount = document.getElementById('createAccount');


createAccount.addEventListener('click',function(){
    const UserAccount = new Bank(name.value,+amount.value);

    name.value = "",amount.value = "";

    console.log(UserAccount);
})

const RakeshAccount = new Bank('Rakes Sir',1000);
const JohnAccount = new Bank('John Doe');

//Both objects are take different memory storage
console.log(RakeshAccount,JohnAccount);
