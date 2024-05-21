
// PART ONE Fizz Buzz

    //Loop through all numbers 1 to 100.
    for (let i = 0; i < 101; i++){
        console.log(i);
    }
    
        // if a number is divisble by 3, log "Fizz"
    
        // 1 through 15
    function divisbleNumber (divisor){
      for (let i = 0; i <15; i ++){
        if (i % divisor === 0){
         console.log(i);
        }
      }
    }
     const advisor = 3;
     divisbleNumber(advisor);  
     console.log('Fizz'); // logs 'Fizz' with the number equals to the divisble 3
    
    
        // If a number is divisible by 5, log "Buzz"
      let divisble = 5;
        let number = 16;
        for (let i = 0; i < number; i ++){
            if(i % divisble === 0){
           console.log(i);
            }
        }  
        console.log('Buzz');    // logs 'Buzz' with the numbers equals to the divisible 5
    
    
            // If a number is divisble by both 3 and 5, log "Fizz Buzz"
            const divisbleOne = 5;
            const divisbleTwo = 3;
            const str = "Fizz Buzz";
    
            for (let i = 0; i < 16; i ++){
                if (i % divisbleOne === 0 ){ // 5
                    console.log(i);
                }
                else if(i % divisbleTwo === 0){ // 3
                    console.log(i);
                }
            }
            console.log(str); 
    
    
            // If a number is not divisble by either 3 or 5, log the numbers
            const divisor = 3;
            const divisorTwo = 5;
            const str1 = "These number are not divisble by 3 and 5";
            for (let i = 0; i < 16; i ++){
                if (i % divisor !== 0 && i % divisorTwo !== 0){
                    console.log( i);
                }
            }
                console.log(str1)
    
                // part 2 //

         // Function to verify if a number is prime
function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to compute the next prime number after a given number
function findNextPrimeNumber(start) {
    let candidate = start + 1; // Start from the number immediately after start
    while (!isPrimeNumber(candidate)) {
        candidate++;
    }
    console.log(`The next prime number after ${start} is ${candidate}`);
    return candidate;
}

// Test function to find and print the next prime for a given number
function testNextPrime(initialNumber) {
    console.log(`Initial number: ${initialNumber}`);
    let nextPrime = findNextPrimeNumber(initialNumber);
    console.log(`Found prime: ${nextPrime}`);
}

// Declare a starting number for testing
let testNumber = 4; // Modify this value for different test cases

// Run the test
testNextPrime(testNumber);
  


// part 3//
// Define a function to process the CSV string
function processCSV(csvString) {
    // Split the CSV string into individual characters
    let characters = csvString.split('');
    
    // Initialize variables to store cell data and track position
    let cellData = '';
    let row = [];
    
    // Loop through each character in the CSV string
    for (let i = 0; i < characters.length; i++) {
        let currentChar = characters[i];
        
        // If the current character is a comma, it signifies the end of a cell
        if (currentChar === ',') {
            row.push(cellData); // Store the cell data
            cellData = ''; // Reset the cell data for the next cell
        } else if (currentChar === '\n') {
            row.push(cellData); // Store the last cell data in the row
            console.log(row.join(' ')); // Log the entire row
            row = []; // Reset the row for the next line
            cellData = ''; // Reset the cell data for the next cell
        } else {
            // Append the character to the cell data
            cellData += currentChar;
        }
    }
    
    // Log the last row if there's any data left
    if (cellData !== '') {
        row.push(cellData);
        console.log(row.join(' '));
    }
}

// Example CSV strings to test the function
let exampleCSV1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let exampleCSV2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Process the example CSV strings
processCSV(exampleCSV1);
processCSV(exampleCSV2);
