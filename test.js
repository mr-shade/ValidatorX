 // Usage example
import v from './validatorx.mjs';
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
