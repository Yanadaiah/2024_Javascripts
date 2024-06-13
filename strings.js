
const persion1=require('./Oops')

let day = "tuesday "
console.log(day.length) // length of the string include the space

//to access any charector 
console.log(day[1])

//splite the string basid on the 's'
let spiltedString = day.split('s')
console.log(spiltedString)

// to get the day from splitted array
console.log(spiltedString[1])

//To Remove the white spaces
console.log(spiltedString[1].trim())

//Conversion of string to integer
let date = "23"
let nextdate = "27"

let diff = parseInt(date) - parseInt(nextdate)
console.log(diff)

//Integre convert to string 
console.log(diff.toString())

//Concatenate the String
var day1 = day + " is fun day"
console.log(day1)

//indexOf to get the index of the charactor
console.log(day1.indexOf("day"))

//day count in the string
let val = day1.indexOf("day")
let count = 0;
 while(val !== -1) // if day is not fond the will give the -1 value
    {
        count++
        val = day1.indexOf("day", val+1) //means first day value fond at the 4 then we are telling val+1 means continu from the there at 5th index
 }
 console.log(count)

 let pr = new persion1("yana", "eerla")
 pr.fullName()
 
 


