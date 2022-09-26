const cities =['Pasto', 'Bogota', 'Medellin', 'New York', 'London']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}

const reverseStringV2 = str => {
  return new Promise((res, rej) => {
    if(!str) {
      rej(Error('Error'));
    }
    res(str.split('').reverse().join(''));
  });
};

module.exports = randomString