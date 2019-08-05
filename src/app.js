import store from './data/store.js';
import Listing from './data/listings.js'; 
import renderInput from './render-products.js';

const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');
const counter = document.getElementById('round-counter');
const userChoice = document.getElementById('user-choice');
const resultButton = document.getElementById('result-button');

let rounds = 0;
let live = true;

const products = store.getProducts();
const mainListing = new Listing(products);
let firstThreeProducts = mainListing.getThreeRandomProducts();

renderInput(left, firstThreeProducts[0]);
renderInput(middle, firstThreeProducts[1]);
renderInput(right, firstThreeProducts[2]);

products.map(item => {
    if(item.shownLast === 2) {
        item.shownLast = 0;
    }

});

for(let i = 0; i < firstThreeProducts.length; i++) {
    const shownProduct = products.find(item => {

        if(item.id === firstThreeProducts[i].id) {
            return item;
        }

    });

    shownProduct.shown++;
}

store.save('products', products);

userChoice.addEventListener('click', (event) => {
    if(!live) {
        return;
    }

    event.preventDefault();  
    
    const localProducts = store.getProducts();
    
    localProducts.map(item => {
        if(item.shownLast === 2) {
            item.shownLast = 0;
        }
    
    });

    const selectedProduct = localProducts.find(item => {

        if(item.id === event.target.alt) {
            return item;
        }
    });

    for(let i = 0; i < firstThreeProducts.length; i++) {
        const shownProduct = localProducts.find(item => {
    
            if(item.id === firstThreeProducts[i].id) {
                return item;
            }
    
        });
    
        shownProduct.shown++;
    }

    selectedProduct.selected++;

    store.save('products', localProducts);

    const products = store.getProducts();
    const mainListing = new Listing(products);
    firstThreeProducts = mainListing.getThreeRandomProducts();

    renderInput(left, firstThreeProducts[0]);
    renderInput(middle, firstThreeProducts[1]);
    renderInput(right, firstThreeProducts[2]);

    rounds++;
    counter.textContent = rounds;

    if(rounds === 25) {
        live = false;
        
        left.classList.add('hidden');
        middle.classList.add('hidden');
        right.classList.add('hidden');
        resultButton.classList.remove('hidden');
    }
});