var code = {
    // Returns "Hello World!"
    helloWorld: function() {
      return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
      var strToArr = sentence.split(" "); // turn string to array for iteration

      return strToArr.map(function(currentWord, i) {
        // Each iteration check if i is where we want to start
        // to capitalize the nth words.
        if (i % n === 0 && i >= offset) {
          // In JS there is no fancy function to capitalize a word so I must slice it up and stick it together
          // I've done this in variables for readability
          var capitalizeFirstLetter = currentWord[0].toUpperCase();
          var currentWordNoFirstLetter = currentWord.slice(1, (currentWord.length));

          return capitalizeFirstLetter + currentWordNoFirstLetter;
        } else {
          // not an offset index so just return the current word
          return currentWord;
        }
      }).join(" ");
    },

    // Determine if a number is prime
    isPrime: function(n) {
      // primes cannot be 1 or negative, check to see if it is 1 or negative.
      if (n < 2) { return false; }
      // start at 2, as 1 and 0 are not prime numbers. Loop through and check if each number
      // before n is divisable by n, as a prime number can only be divisible by 1 and itself
      for (var i=2; i<n; i++) {
        if (n % i === 0) { return false; } // if n is divisible by current value i return false
      }
      return true;
    },

    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio.
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) { // confused about what it was asking, couldn't find math resources
      var c = a+b; // where some one used 2 numbers 2 figure out the goldenRatio
      var d = c/b; // my search: find golden ratio use two numbers

      if (d <= 1.61800 || d >= 1.61806) { // if NOT between desired test range, recurse
        return code.goldenRatio(b, c); // use b and c as seen above in next interation of the function
        // return from recursion/call stack
        // recursion to continue to crunch numbers until we get what we want.
      }
      return d; // return closest golden ratio
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
      // choose array because naming the variables in the sequence was making things complicated.
      // we must know the current numbers in the array to calculate the next number in the sequence
      // I use this array to keep track of the sequence
      var fibNums = [0, 1, 1];

      // the values at index 0, 1, 2 are already known so we do not need to send them through the
      // for loop
      if (n>2) {
        // move through the Fibonacci sequence to find the next sum/Fibonacci number
        for (var i=2; i<n; i++) {
          fibNums[0] = fibNums[1]; // move to the next number
          fibNums[1] = fibNums[2]; // move to the next number
          fibNums[2] = fibNums[0] + fibNums[1]; // the sum of the 2 previous numbers
        }
        return fibNums[2]; // return the nth Fibonacci number.
      }
        return fibNums[n]; // if n is 0, 1, or 2 return the value at fibNum's index n.
    },

    // Given the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n, guess) {
      // Babylonian Method, src -> https://www.youtube.com/watch?v=jTWxFGmWoZg

      // Whenever doing sqrt by hand you take a guess at the square root,
      // I chose to divide by 2 for a guess because it is the smallest number
      // If we already have a guess we don't want to over write it during recursion, we won't get closer
      // by over writing we will just loop forever
      if (guess === undefined) { guess = n/2; } // set initial guess, starting point

      // Use the Babylonian Method equation with guess to get a more ideal guess
      var BMGuess = (guess + (n / guess)) / 2;
      if (guess === BMGuess) { return BMGuess; } // compare our guess to the Babylonian Method guess return if matching
      return code.squareRoot(n, BMGuess);
      // Recursion to keep crunching guess closer to sqrt.
      // We have to send the BMGuess to continue crunching as well.
      // Return from recursive call stack or else we recieve nothing back to return.
    }

};
module.exports = code;
