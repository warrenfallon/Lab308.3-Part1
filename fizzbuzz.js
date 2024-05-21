
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