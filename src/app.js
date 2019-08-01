import products from './data/products.js';
import Listing from './data/listings.js'; 

const mainListing = new Listing(products);

const test = mainListing.getThreeRandomProducts();

const list = this.list;