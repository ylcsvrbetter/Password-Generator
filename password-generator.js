/**
 * Generates a strong password based on user-defined length and complexity.
 * @param {number} length - Desired password length (e.g., 12).
 * @param {object} options - Complexity options:
 *   {
 *     lowercase: boolean, // include lowercase letters
 *     uppercase: boolean, // include uppercase letters
 *     numbers: boolean,   // include numbers
 *     symbols: boolean    // include special characters
 *   }
 * @returns {string} Generated password
 */
function generatePassword(length, options) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/`~';

  let allChars = '';
  if (options.lowercase) allChars += lowercaseChars;
  if (options.uppercase) allChars += uppercaseChars;
  if (options.numbers) allChars += numberChars;
  if (options.symbols) allChars += symbolChars;

  if (!allChars) throw new Error('At least one character type must be selected.');

  // Ensure at least one character from each selected set
  let passwordArray = [];
  if (options.lowercase) passwordArray.push(randomChar(lowercaseChars));
  if (options.uppercase) passwordArray.push(randomChar(uppercaseChars));
  if (options.numbers) passwordArray.push(randomChar(numberChars));
  if (options.symbols) passwordArray.push(randomChar(symbolChars));

  // Fill remaining length with random chars from allChars
  while (passwordArray.length < length) {
    passwordArray.push(randomChar(allChars));
  }

  // Shuffle to avoid predictable sequences
  passwordArray = shuffleArray(passwordArray);

  return passwordArray.join('');
}

function randomChar(charSet) {
  const idx = Math.floor(Math.random() * charSet.length);
  return charSet[idx];
}

function shuffleArray(arr) {
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Example usage:
const password = generatePassword(16, {
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true
});
console.log(password);
