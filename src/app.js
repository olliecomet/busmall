import store from './data/store.js';
import Listing from './data/listings.js'; 
import renderInput from './render-products.js';

const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');
const radioInputs = document.querySelectorAll('input[name=product]');
const counter = document.getElementById('round-counter');

let rounds = 0;
let live = true;
let selectedProducts = [];

const products = store.getProducts();
const mainListing = new Listing(products);
const firstThreeProducts = mainListing.getThreeRandomProducts();

const leftInput = renderInput(left, firstThreeProducts[0]);
const middleInput = renderInput(middle, firstThreeProducts[1]);
const rightInput = renderInput(right, firstThreeProducts[2]);

for(let i = 0; i < radioInputs.length; i++){
    const radioInput = radioInputs[i];
    radioInput.addEventListener('input', handleUserChoice);
}

function handleUserChoice(event) {
    if(!live) {
        return;
    }

    

    rounds++;
    counter.textContent = rounds;

    if(rounds === 25) {
        live = false;
    }
}
