// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log('Importing module');
// console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, qt);

// import * as shoppingCart from "./shoppingCart.js"

// console.log(shoppingCart);
// shoppingCart.addToCart('bread', 5);

// import add, { addToCart, totalPrice as price, qt} from "./shoppingCart.js"
// add('bread', 5);
// console.log(price, qt);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost); // Output: Promise { <pending> }

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2); // Output: { title: ..., text: ... }

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
// const stateClone = { ...state };
// state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);

// rebuild but not need to reload the whole page when changing modules
if (module.hot) {
  module.hot.accept();
}