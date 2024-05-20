for (let i = 1; i <= 100; i++) {
let output = ''; 
if (i % 3 === 0) output +=
'Fizz';
if (i % 5 === 0) output +=
'Buzz';
  console.log (output || i);
}

//
//part 2: Prime Time
// Description: Find the next prime number after a given number n.
//

function FindNextPrime(n) {
   let currentNumber = n + 1; // start checking from the number after n

   while (true) {
    let isPrime = true; // Assume the number is prime
      for(let i =2; i * i <= currentNumber; i++) {
        if (currentNumber % i === 0)  { isPrime = false;// founda divisor, not a prime number
    break;}
     }
    
     if (isPrime) {
       console.log ('The next prime number after ${n} is ${currentNumber}');
        break;
        {
currentNumber++; // Move to the next number
 }
     }
    
     // Test the function
     FindNextPrime(10); 
    
    
    
    
    }
           




} 
