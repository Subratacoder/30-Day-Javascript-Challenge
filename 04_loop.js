// Activity One 

for (let index = 1; index <= 10; index++) {
    // console.log(index);
}

for (let item = 0; item <= 10; item++) {
    //    console.log(`5 * ${item} = ${5 * item}`);  
}

sum = 0;   
let i = 1;
while (i <= 10) {
    sum = sum + i;
    i++;
}
// console.log(`The sum of 1 to 10 is ${sum}`);
let index = 10;
while (index >= 0) {
    // console.log(index);
    index--
}
item = 1
do {
    // console.log(item);
    item++
} while (item <= 5);



function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}

// Example usage:
let number = 5;
// console.log(`The factorial of ${number} is ${factorial(number)}.`);

// Pattern printing
let n = 5
for (let o = 1; o <= n; o++) {
    let pattern = ""
        for (let i = 1; i <= o ; i++) {
            pattern += "*"
            
             }
    // console.log(pattern);
    
}

for (let i = 1; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}