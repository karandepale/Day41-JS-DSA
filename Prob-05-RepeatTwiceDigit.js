/*Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array  */

function findRepeatedDigits() {
    const repeatedDigits = [];
  
    for (let i = 0; i <= 100; i++) {
      const numString = i.toString();
  
      if (numString.length === 2 && numString[0] === numString[1]) {
        repeatedDigits.push(i);
      }
    }
  
    return repeatedDigits;
  }
  
  const repeatedDigitsArray = findRepeatedDigits();
  
  console.log("Digits that are repeated twice:");
  console.log(repeatedDigitsArray);
  