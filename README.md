# Password Generator

This project provides a strong password generator written in JavaScript. It allows users to create secure passwords by specifying desired length and complexity requirements.

## Features

- User-defined password length
- Customizable complexity options:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
- Ensures at least one character from each selected category
- Uses cryptographically strong randomness (if available)

## Usage

```javascript
// Import or copy the function
const password = generatePassword(16, {
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true
});
console.log(password);
```

### Function Signature

```javascript
function generatePassword(length, options)
```
- `length`: Integer, desired password length.
- `options`: Object specifying complexity:
  - `lowercase` (boolean)
  - `uppercase` (boolean)
  - `numbers` (boolean)
  - `symbols` (boolean)

### Example Output

```
yT8#nA!pR2@kLm3$
```

## Security Note

- Always use strong, unique passwords for your accounts.
- This generator can be used in browsers or Node.js environments.

## License

MIT
