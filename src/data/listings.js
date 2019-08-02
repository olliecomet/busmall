class Listing {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomIndex() {
        const list = this.list;
        return Math.floor(Math.random() * list.length);
    }

    getRandomProduct() {
        const list = this.list;
        const index = this.getRandomIndex();
        const product = list[index];

        return product;
    }

    findProductById(list, id) {
        const foundProduct = list.find(item => {

            if(item.id === id) {
                return item; 
            }

        });

        return foundProduct;
    }

    removeProductById(id) {
        const list = this.list;

        for(let i = 0; i < list.length; i++) {
            const product = list[i];

            if(product.id === id) {
                list.splice(i, 1);
            }
        }
    }

    getThreeRandomProducts() {
        let subList = [];
        
        for(let i = 0; i < 3; i++) {
            const item = this.getRandomProduct();
            subList.push(item);     

            this.removeProductById(item.id);
        }

        return subList;
    }
}

export default Listing;