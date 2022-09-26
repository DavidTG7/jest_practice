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

const reverseStringV2 = str => {
  return new Promise((res, rej) => {
    if(!str) {
      rej(Error('Error'));
    }
    res(str.split('').reverse().join(''));
  });
};

test('Test a promise', () => {
  return reverseStringV2('Hola')
    .then(string => {
      expect(string).toBe('aloH');
    })
});

// To test async and await

test('Testing async and await', async () => {
  const string = await reverseStringV2('Hola');
  expect(string).toBe('aloH');
});

// afterEach(() => console.log('After each test.'))
// afterAll(() => console.log('After all tests.'))

// beforeEach(() =>console.log('Before each test.'))
// beforeAll(() =>console.log('Before all tests.'))