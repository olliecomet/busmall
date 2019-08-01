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

    getThreeRandomProducts() {
        let subList = [];
        
        for(let i = 0; i < 3; i++) {
            const item = this.getRandomProduct();
            subList.push(item);
        }

        return subList;
    }
}

export default Listing;