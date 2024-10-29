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
      type: products[i].type, // Aynı type
      price: products[i].price, // Aynı price
      color: products[i].color, // Aynı color
      discountPrice: products[i].price - (products[i].price * discount / 100)
    };

    
    newProducts.push(discountedProduct);
  }
  
  return newProducts;
};

console.log(applyDiscount(products, 10)); // İndirimli yeni ürün listesi
console.log(products); // Orijinal ürün listesi değişmeden kalır


