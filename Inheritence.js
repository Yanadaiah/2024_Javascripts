
//User extends keywords to inharite the class
//imp ** : If pararent class have constructor then child class also should have the same kind of constructor
//parant class constructor should call in the first line of the child class constructor

const person = require("./Oops")

class pet extends person
{
    get loaction()
    {
        return "BlueCrass"
    }

    Constructor(firstName,lastName) //imp ** : If pararent class have constructor then child class also should have the same kind of constructor
    {
        Super(firstName,lastName) //parant class constructor should call in the first line of the child class constructor
    }
}

let pt =new pet("my"," Pet")
console.log(pt.loaction)
pt.fullName()