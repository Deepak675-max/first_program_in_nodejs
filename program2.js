const fruits = ['apple', 'oranges', '', 'mango', '', 'lemon'];

const updatedFruits = fruits.map(fruit => fruit === '' ? "empty string" : fruit)

console.log("Fruits before Update: ", fruits);
console.log("Fruits after update: ", updatedFruits);
