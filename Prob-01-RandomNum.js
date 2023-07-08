/*
Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/


// Generate 10 random 3-digit numbers
function generateRandomNumbers() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
      var randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      numbers.push(randomNumber);
    }
    return numbers;
  }
    var numbersArray = generateRandomNumbers();
  console.log("Generated Numbers: " + numbersArray);
  
  var largest = secondLargest = Number.MIN_SAFE_INTEGER;
  var smallest = secondSmallest = Number.MAX_SAFE_INTEGER;
  
  for (var i = 0; i < numbersArray.length; i++) {
    var currentNumber = numbersArray[i];
    
    if (currentNumber > largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest && currentNumber < largest) {
      secondLargest = currentNumber;
    }
    
    if (currentNumber < smallest) {
      secondSmallest = smallest;
      smallest = currentNumber;
    } else if (currentNumber < secondSmallest && currentNumber > smallest) {
      secondSmallest = currentNumber;
    }
  }
  
  console.log("Second Largest: " + secondLargest);
  console.log("Second Smallest: " + secondSmallest);
  