const flag = true

if(flag){
    console.log("Condition satiesfied")
}else{
    console.log("Condition is not satiesfied")
}


if(!flag){ // Here exaclaminator will revers the flag but not assigning or not declararing
    console.log("Condition satiesfied")
}else{
    console.log("Condition is not satiesfied")
}

let i =0
while(i<10){
    i++
    console.log(i)
}

do{
console.log("satiesfield")
}while(i>11)

    console.log("*******************************")


    //multiples of 2 & 5
    let n = 0;
    for(let k =1; k<100;k++){
        if(k%2==0 && k%5==0){
            //get only first 3 numbers
          
           if(n==3){
            break
           }
           n++
            console.log(k)
            
        }
    }