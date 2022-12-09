function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length

  for (let i = 0; i < (len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false
    } else {
      return true
    }
  }
}

/* 
  Add your pseudocode here
  1. find the length of the string, word
  2. iterate/loop through the first half of the string
  3. check if the first and last half are similar
    a. if they comparison aren't equal, it's not a palindrome
    b. else, it is one.
  4. During the iteration, if any character of the string, 
  when compared with its corresponding last string is not equal, the string is not considered a palindrome.
*/

/*
  Add written explanation of your solution here
    a string is said to be a palindrome if it can be read the same way even in reverse e.g madam
    mom also reads the same either from forward or backward.
    therefore, it is important to compare the two parts of a word 
    ...and if they are similar, then it is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
