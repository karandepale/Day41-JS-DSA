/*
Extend the Problem 01 Random number generate program to sort the array and then find the 2nd largest
and the 2nd smallest element.
*/

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
  
  numbersArray.sort(function(a, b) {
    return a - b;
  });
  
  var secondLargest = numbersArray[numbersArray.length - 2];
  var secondSmallest = numbersArray[1];
  
  console.log("Sorted Array: " + numbersArray);
  console.log("Second Largest: " + secondLargest);
  console.log("Second Smallest: " + secondSmallest);
  