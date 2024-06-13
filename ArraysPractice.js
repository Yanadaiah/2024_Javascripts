//Array Declaration
//var Marks = Array(6)
//var Marks =new Array(20,30,40,35,68,78)
var Marks = [20,30,40,35,68,70]

//Access element by index
console.log(Marks[2])

//Reassining the value or updating the value
Marks[3] = 50
console.log(Marks) //printing the entair array

//Lenth of the array
console.log(Marks.length)

//Adding element at end
Marks.push(65)
console.log(Marks)

//Deleting the element from end
Marks.pop()
console.log(Marks)

//Adding the element at bigining
Marks.unshift(12)
console.log(Marks)

//To know the index of the value 
console.log(Marks.indexOf(78))

//To know the element present or not in the Array
console.log(Marks.includes(100))

//Create a sub Array
subMarks=Marks.slice(2,5) //here 5 is maximum index so 5 index will not print
console.log(subMarks)

//To Loop an array and sum of all elements
let sum = 0;
for(let k = 0; k<Marks.length-1; k++){
    console.log(Marks[k])
    sum = sum + Marks[k]
}console.log(sum)

//Same logic we can itarate through the reduce method

//reduce method we can use when we need to updtae the value to variables

let total = Marks.reduce((sum,mark)=>sum+mark,0) //we can use the same method for multiplication etc..
console.log(total) 

var Scrores = [12,30,45,15,70] //To print the even scrores
//Genral method
var EvenScrores = []

for (let m = 0; m < Scrores.length; m++){
     if(Scrores[m] %2 ==0){
        EvenScrores.push(Scrores[m])
     }
}console.log(EvenScrores)

//same logic we can achive through the filter method as well and this can be use we have to to filter the values basid on logic

var newfilterValue = Scrores.filter(Scrores=>Scrores%2==0)
console.log(newfilterValue)

//Map is used to do itarate and do some actions on that

var MultplayValue= newfilterValue.map(newfilterValue=>newfilterValue*3)
console.log(MultplayValue)

//Do all actons on one arraya at time

var num = [2,5,7,9,11,15]
let total1 = num.filter(num=>num%2==0).map(num=>num*3).reduce((total,num)=>total+num,0)
console.log(total)


//Sort methods 
let names = ["yana","Dharu","nan"]
console.log(names.sort())

var num = [1,4,5,90,34,54,55,65]
console.log(num.sort((a,b)=>a-b))


//Reverse method

console.log(names.reverse())
console.log(num.sort((a,b)=>b-a))