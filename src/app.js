import products from './data/products.js';
import Listing from './data/listings.js'; 

import renderInput from './render-products.js';

const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');

const mainListing = new Listing(products);

const firstThreeProducts = mainListing.getThreeRandomProducts();

const leftInput = renderInput(left, firstThreeProducts[0]);
const middleInput = renderInput(middle, firstThreeProducts[1]);
const rightInput = renderInput(right, firstThreeProducts[2]);

// add for loop to add event listeners to all input things
