// Generate 10 random 3-digit numbers
function generateRandomNumbers() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
      var randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      numbers.push(randomNumber);
    }
    return numbers;
  }
  
  // Store the generated numbers in an array
  var numbersArray = generateRandomNumbers();
  
  // Print the generated numbers
  console.log("Generated Numbers: " + numbersArray);
  
  // Find the 2nd largest and 2nd smallest elements without sorting
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
  
  // Print the second largest and second smallest numbers
  console.log("Second Largest: " + secondLargest);
  console.log("Second Smallest: " + secondSmallest);
  