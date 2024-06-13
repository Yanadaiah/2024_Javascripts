let person = {
//person is an object and will store in key and value pair , first and lastName are the key and key always should be in string but value can be anything

    firstName : 'yana',
    lastName : 'eerla',

    FullName : function() {
        console.log(this.firstName+" "+this.lastName)
    }
}
//call the obeject
console.log(person.firstName)

//we call the object in another way also

console.log(person['lastName']) //lastName is string so have to mention in single quetations

//we can reassign the values in runtime as well

console.log(person.firstName = 'Dharu')

//We can add the proparty to the object in run time as well

person.Gender = 'male'
console.log(person.Gender)

//we can delete the proparty 

delete person.Gender

//check property is pasent or not

console.log('Gender' in person)

//Imported for interview --> To print the values of all properties

for(let key in person){
    console.log(person[key])
}

//Not only properties function also we call from objcets
person.FullName() // We have to use the peranthasis while calling the functions

