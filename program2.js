const fruits = ['apple', 'oranges', '', 'mango', '', 'lemon'];

const updatedFruits = fruits.map(fruit => fruit === '' ? "empty string" : fruit)

console.log("Fruits before Update: ", fruits);
console.log("Fruits after update: ", updatedFruits);

const obj1 = { 'key1': 1 }

const obj2 = { ...obj1 }

if (obj2 === obj1) {

    console.log('same objects')

}

else {

    console.log('different objects')

}