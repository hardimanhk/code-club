const { test, expect } = require('@jest/globals');
// !!IMPORTANT update this import to your solution file to run the tests for your code
const toMorseCode = require('./jeremySolution');

test('empty string returns empty string', () => {
  expect(toMorseCode('')).toStrictEqual('');
});

test('Hello World', () => {
  expect(toMorseCode('Hello World')).toStrictEqual(['**** * *-** *-** ---', '*-- --- *-* *-** -**']);
});

test('Hello World with whitespace', () => {
  expect(toMorseCode('    Hello      World     ')).toStrictEqual(['**** * *-** *-** ---', '*-- --- *-* *-** -**']);
});

test('unkown char', () => {
  expect(toMorseCode('$')).toStrictEqual(['Please enter a valid input.']);
});

test('numbers', () => {
  expect(toMorseCode('Hello 1234')).toStrictEqual(['**** * *-** *-** ---', '*---- **--- ***-- ****-']);
});

test('weird caps', () => {
  expect(toMorseCode('hUeHueHUE')).toStrictEqual(['**** **- * **** **- * **** **- *']);
});