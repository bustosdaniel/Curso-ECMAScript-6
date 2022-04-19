const data = {
  fronted: 'Daniel',
  backend: 'Valentina',
  design: 'Oscar',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/*const data = {
  fronted: 'Daniel',
  backend: 'Valentina',
  design: 'Oscar',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);
*/

const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'---------'))
console.log('food'.padEnd(12,'---------'))

const obj = {
  name: 'Daniel',
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('hello world'), 3000)
      : reject(new error('test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try{
    const hello = await helloWorld();
    console.log(hello);
  }catch (error) {
    console.log(error);
  }
}

anotherFunction();