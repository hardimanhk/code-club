// !!IMPORTANT update this import to your solution file to run test for your code
const toMorseCode = require('./');

test('empty string returns empty string', () => {
  expect(toMorseCode('')).toBe('');
});
