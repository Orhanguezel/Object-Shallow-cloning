# Shallow Copy - Example Solutions

## Task 1: Adding a New Product to the Cart

Given an array of products called `cart` and a product object `hatProduct`, the task is to add the new product to the cart without modifying the original `cart`.

### Solution

```javascript
const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  }
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

const addProduct = (cart, product) => {
  const newCart = [...cart, product]; 
  return newCart;
};

const updatedCart = addProduct(cart, hatProduct);

console.log(updatedCart);
console.log(cart); 
```

## Task 2: Removing a Task from a Task List

Given an array of task objects, the task is to create a function called `finishTask` that removes the last task from the list without modifying the original `tasks` array.

### Solution

```javascript
const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
  const newTasks = [...tasks]; // Creates a shallow copy
  newTasks.pop(); // Removes the last task from the new array
  return newTasks;
};
console.log(finishTask(tasks));
console.log(tasks);
```

## Task 3: Adding a Full Name to a Person Object

Given an object `person`, the task is to create a function called `addFullName` that adds a `fullName` property to a shallow copy of `person`.

### Solution

```javascript
const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  const newPerson = { ...person }; 
  newPerson.fullName = `${person.firstName} ${person.lastName}`; 
  return newPerson;
};

console.log(addFullName(person)); 
console.log(person); 
```

## Task 4: Applying Discount to Products

Given an array of products, the task is to create a function called `applyDiscount` that applies a discount to each product’s price, creating a new array with the updated discounted prices, without modifying the original array.

### Solution

```javascript
const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

const applyDiscount = (products, discount) => {
  const newProducts = []; 

  for (let i = 0; i < products.length; i++) {
    
    const discountedProduct = {
      type: products[i].type,
      price: products[i].price,
      color: products[i].color,
      discountPrice: products[i].price - (products[i].price * discount / 100),
    };

    newProducts.push(discountedProduct); 
  }
  
  return newProducts; 
};

console.log(applyDiscount(products, 10)); 
console.log(products); 
```