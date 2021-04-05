const { test, expect } = require('@jest/globals');
// !!IMPORTANT update this import to your solution file to run the tests for your code
const toMorseCode = require('./');

test('empty string returns empty string', () => {
  expect(toMorseCode('')).toBe('');
});

test('Hello World', () => {
  expect(toMorseCode('Hello World')).toBe(['**** * *-** *-** ---', '*-- --- *-* *-** -**']);
});

test('Hello World with whitespace', () => {
  expect(toMorseCode('    Hello      World     ')).toBe(['**** * *-** *-** ---', '*-- --- *-* *-** -**']);
});

test('unkown char', () => {
  expect(toMorseCode('$')).toBe(['Please enter a valid input.']);
});

test('numbers', () => {
  expect(toMorseCode('Hello 1234')).toBe(['**** * *-** *-** ---', '*---- **--- ***-- ****-']);
});

test('weird caps', () => {
  expect(toMorseCode('hUeHueHUE')).toBe(['**** **- * **** **- * **** **- *']);
});