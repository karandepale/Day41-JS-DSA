//Write a Program to show Sum of three Integer adds to ZERO

function findTriplets(numbers) {
    const triplets = [];
  
    for (let i = 0; i < numbers.length - 2; i++) {
      for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === 0) {
            triplets.push([numbers[i], numbers[j], numbers[k]]);
          }
        }
      }
    }
  
    return triplets;
  }
  
  const numbersArray = [2, -3, 1, -2, 0, 5, -1, 4];
  const tripletsArray = findTriplets(numbersArray);
  
  console.log("Triplets that sum to zero:");
  tripletsArray.forEach(triplet => {
    console.log(triplet);
  });
  