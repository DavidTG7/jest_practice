const text = 'Hello World';
const fruits = ['lemon', 'apple', 'banana']

test('A text goes here', () =>{
  expect(text).toMatch(/World/);
});

test('Do we have a banana?', () => {
  expect(fruits).toContain('banana');
});

test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('To be truthy', () => {
  expect(!false).toBeTruthy();
});

test('To be falsy', () => {
  expect(false).toBeFalsy();
});

// How to test callbacks:

const reverseString = (string, callback) => {
  callback(string.split('').reverse().join(''))
};

test('Is a callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

// How to test Promises