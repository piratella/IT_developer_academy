// print all numbers between -10 and 19
console.log("NUMBERS BETWEEN -10 AND 19");
for (var i = -10; i < 19;i++) {
    console.log(i);
}

// print all even numbers between 10 and 40
console.log ("even");
for (var i = 10; i <= 40; i++) {
    if(i % 2 === 0){
    console.log(i);
    }
}



//OR 
console.log ("even2");
for (var j = 10; j <= 40; j += 2){
    console.log(j);
}



// print all odd numbers between 300 and 333

console.log ("odd");
for (var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}


// print all numbers divisible by 5 and 3 between 5 and 50

for (var i = 5; i <=50; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }

}