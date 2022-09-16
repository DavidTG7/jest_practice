const cities =['Pasto', 'Bogota', 'Medellin', 'New York', 'London']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}

module.exports = randomString