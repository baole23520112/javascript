console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// private
export const addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 327;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };
export default (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};
