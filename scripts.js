// JavaScript for palindrome checker
function isPalindromeOrReverse(word) {
    // Remove any white spaces and convert the word to lowercase
    const formattedWord = word.replace(/\s/g, '').toLowerCase();
  
    // Check if the word is a palindrome
    const isPalindrome = formattedWord === formattedWord.split('').reverse().join('');
  
    // If it is a palindrome, return the original word
    if (isPalindrome) {
      return word;
    } else {
      // If it is not a palindrome, return the word in reverse order
      return word.split('').reverse().join('');
    }
  }
  
  // Event listener for form submission
  const form = document.getElementById('palindrome-form');
  const resultElement = document.getElementById('result');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWord = document.getElementById('word-input').value;
    const result = isPalindromeOrReverse(inputWord);
    resultElement.textContent = result;
  });
  
