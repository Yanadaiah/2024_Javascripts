//Function is block of the code and add is the function name

function add(a, b){
    return a+b
}

let sum = add(5,8)
console.log(sum)
 
// if function dont have name then we called as anyonymus function -- function exprassions
//and above same function we can write like anyonymous function

let SumValue = function (a,b){
    return a+b
}

console.log(SumValue(5,9))

//and same function we can write it like

//=> shotpi will indicate the anonymus operetor

let Value = (a,b)=>a+b
console.log(Value(7,9))
