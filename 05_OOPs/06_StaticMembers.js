console.log('In class have class own data members are called ');

class User{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    static compareAge(a,b){
        return a.age - b.age;
    }
}

const Nikhil = new User('Nikhil',+45);
const user1 = new User('user1',+15);
const user2 = new User('user2',+40);

const users = [Nikhil,user1,user2];
users.sort(User.compareAge);

console.log(users);