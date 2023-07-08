/*
Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.
*/

const readline = require('readline-sync');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeFactors(n) {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

const number = readline.question('Enter a number: ');
const n = parseInt(number);
const factorsArray = primeFactors(n);
console.log('Prime Factors:', factorsArray);
