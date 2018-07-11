// print all numbers between -10 and 19

var counter = -10;
while (counter < 20) {
    console.log(counter);
    counter++;
}


// print all even numbers between 10 and 40

var even = 10;
while (even <= 40) {
    if (even % 2 === 0) {
        console.log(even);
    }
    even += 2;
}

// the easiest way
while (even <= 40) {
    console.log(even);
    even += 2;
}


// print all odd numbers between 300 and 333

var odd = 300;
while (odd <= 333) {
    console.log(odd)
    odd += 1;
}


// print all numbers divisible by 5 and 3 between 5 and 50
console.log("DIVISIBLE");
var divisible = 0;

while (divisible <= 50) {
if (divisible % 5 === 0 && divisible % 3 === 0){
    console.log(divisible);
}
divisible++;
}

