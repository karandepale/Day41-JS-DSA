/* Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times */



function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function findMaxMinCounts(results) {
    let maxCount = -Infinity;
    let minCount = Infinity;
    let maxNum;
    let minNum;
  
    for (const [num, count] of results.entries()) {
      if (count > maxCount) {
        maxCount = count;
        maxNum = num;
      }
      if (count < minCount) {
        minCount = count;
        minNum = num;
      }
    }
  
    return {
      maxNum: maxNum,
      maxCount: maxCount,
      minNum: minNum,
      minCount: minCount
    };
  }
  
  function rollDieAndStoreResults() {
    const results = new Map();
    let maxReachedCount = 0;
  
    while (true) {
      const rollResult = rollDie();
      let currentCount = results.get(rollResult) || 0;
      currentCount++;
  
      if (currentCount > maxReachedCount) {
        maxReachedCount = currentCount;
      }
  
      results.set(rollResult, currentCount);
  
      if (maxReachedCount === 10) {
        break;
      }
    }
  
    return findMaxMinCounts(results);
  }
  
  const { maxNum, maxCount, minNum, minCount } = rollDieAndStoreResults();
  
  console.log("Maximum reached number:", maxNum);
  console.log("Maximum count:", maxCount);
  console.log("Minimum reached number:", minNum);
  console.log("Minimum count:", minCount);
  