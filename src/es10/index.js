let array = [1,2,3 [1,2,3 [1,2,3]]]

console.log(array.flat(2));

let array = [1,2,3,5,6,7]

console.log(array.flatMap(value => [value, value * 2]));

let hello = '         Hello World'
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World       ';
console.log(hello);
console.log(hello.trimEnd());

try {

} catch {
  error
}

let entries = [["name", "Oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol); 
console.log(symbol.description);