import products from './data/products.js';
import Listing from './data/listings.js'; 

import renderInput from './render-products.js';

const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');

const mainListing = new Listing(products);

const firstThreeProducts = mainListing.getThreeRandomProducts();

renderInput(left, firstThreeProducts[0]);
renderInput(middle, firstThreeProducts[1]);
renderInput(right, firstThreeProducts[2]);




