
//Classes are intraduced in verion 6 
module.exports=class persion
{
    age = 25

    get loaction() //this is not a method its just proparty(if we use "get" then thats property)
    {
        return "canada"
    }

    //Constuctor - is method which execute by default when creating the object for that class
    constructor(firstName, lastName)//these are the instance variable and above are the class level variables
    {
        this.firstName = firstName  //Actually constuctor variable are the blck level variables to enhance those value to class level we 
        //do this and here this variables are class lavel and rest are constuctor variables
        this.lastName = lastName
    }

    fullName()
    {
      console.log(this.firstName+this.lastName)
    }

}
// let pr = new persion("yana","eerla") //creating the object for that class
// console.log(pr.age)
// console.log(pr.loaction) //to get proprties no nedd ()
// pr.fullName() //fullName is method so we have to use ()
// //we can create different objects for diff variable values

// let pr1 = new persion("nan","gunj")
// pr1.fullName()

