function checkForSpam (str) { 
    'use strict';
    // Write code under this line
    str = str.toLowerCase()
    const result = str.includes('spam') || str.includes('sale');
   return result;
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true