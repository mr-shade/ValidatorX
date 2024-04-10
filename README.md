# validatorr

[![npm version](https://img.shields.io/npm/v/validatorr.svg)](https://www.npmjs.com/package/validatorr)
[![GitHub issues](https://img.shields.io/github/issues/mr-shade/validatorr)](https://github.com/mr-shade/validatorr/issues)
[![GitHub stars](https://img.shields.io/github/stars/mr-shade/validatorr)](https://github.com/mr-shade/validatorr/stargazers)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fmr-shade%2Fvalidatorr%2F&labelColor=%23f47373&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fmr-shade%2Fvalidatorr%2F)
[![Twitter Follow](https://img.shields.io/twitter/follow/sh20raj.svg?style=social)](https://twitter.com/sh20raj)

A comprehensive and light weight validation library for common data validation tasks.

## Installation

You can install `validatorr` via npm:

```bash
npm install validatorr
```

Or include it via CDN:

```html
<!-- Latest release -->
<script src="https://cdn.jsdelivr.net/gh/mr-shade/validatorr@latest/validatorr.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/validatorr"></script> -->



<!-- Specific version (replace '1.0.0' with the desired version) -->
<!-- <script src="https://cdn.jsdelivr.net/npm/validatorr@1.0.0"></script> -->
```

## Usage

Here's an example of how you can use `validatorr`:

```javascript
import v from 'validatorr';
 // Usage example
// import v from './validatorr.mjs';
// const v = require('./v.js');

console.log(v.isEmail('test@example.com')); // true
console.log(v.isURL('https://www.example.com')); // true
console.log(v.isNotEmptyString('Hello')); // true
console.log(v.isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(v.isPalindrome('IamnotPalindrome')); // false

console.log(v.isWithinRange(5, 1, 10)); // true
console.log(v.isInArray('apple', ['banana', 'apple', 'orange'])); // true
console.log(v.isUUID('123e4567-e89b-12d3-a456-426614174000')); // true
console.log(v.isHexColor('#ffcc00')); // true

console.log(v.isDateYYYYMMDD('2024-04-09')); // true
console.log(v.isCreditCard('4111-1111-1111-1111')); // true
console.log(v.isPhoneNumber('+1234567890')); // true
console.log(v.isPostalCode('12345')); // true
console.log(v.isStrongPassword('Nndw$%623!')); // true
console.log(v.isAlpha('abcdefghijklmnopqrstuvwxyz')); // true
console.log(v.isAlphanumeric('abc123')); // true
console.log(v.isNumeric('12345')); // true
```

## Features

- **isEmail(email)**: Checks if a string is a valid email address.
- **isURL(url)**: Checks if a string is a valid URL.
- **isNotEmptyString(str)**: Checks if a string is not empty.
- **isPalindrome(str)**: Checks if a string is a palindrome.
- **isWithinRange(num, min, max)**: Checks if a number is within a specified range.
- **isInArray(value, array)**: Checks if a value exists in an array.
- **isUUID(uuid)**: Checks if a string is a valid UUID.
- **isHexColor(color)**: Checks if a string is a valid HEX color.
- **isDateYYYYMMDD(dateString)**: Checks if a string is a valid date in the format `YYYY-MM-DD`.
- **isCreditCard(cardNumber)**: Checks if a string is a valid credit card number.
- **isPhoneNumber(phone)**: Checks if a string is a valid phone number.
- **isPostalCode(postalCode, countryCode)**: Checks if a string is a valid postal code.
- **isStrongPassword(password)**: Checks if a string is a strong password.
- **isAlpha(str)**: Checks if a string contains only alphabetic characters.
- **isAlphanumeric(str)**: Checks if a string contains only alphanumeric characters.
- **isNumeric(str)**: Checks if a string contains only numeric characters.

### Usage via CDN

You can also use `validatorr` directly in the browser via CDN:

```html
<!-- Latest release -->
<script src="https://cdn.jsdelivr.net/npm/validatorr"></script>

<!-- Specific version (replace '1.0.0' with the desired version) -->
<!-- <script src="https://cdn.jsdelivr.net/npm/validatorr@1.0.0"></script> -->
```

### Documentation

#### isEmail(email)

Checks if a string is a valid email address.

**Parameters:**
- `email`: String - The email address to validate.

**Example:**
```javascript
const isValidEmail = validatorr.isEmail('test@example.com');
console.log(isValidEmail); // true
```

#### isURL(url)

Checks if a string is a valid URL.

**Parameters:**
- `url`: String - The URL to validate.

**Example:**
```javascript
const isValidURL = validatorr.isURL('https://www.example.com');
console.log(isValidURL); // true
```

#### isNotEmptyString(str)

Checks if a string is not empty.

**Parameters:**
- `str`: String - The string to check.

**Example:**
```javascript
const isValid = validatorr.isNotEmptyString('Hello');
console.log(isValid); // true
```

<!-- #### More Methods...

You can find detailed examples and parameters for all methods in the validatorr Documentation. -->

## Issues

If you encounter any issues or have suggestions, please feel free to [open an issue on GitHub](https://github.com/mr-shadevalidatorr/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> https://dev.to/sh20raj/xvalidatorr-a-lightweight-validation-library-for-javascript-2c59
