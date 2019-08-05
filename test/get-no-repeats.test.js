import products from '../src/data/products.js';

const test = QUnit.test;

function getNewRandom(bigArr, smallArr) {
    const newChoices = [];

    for(let i = 0; newChoices.length < 3; i++){
        const product = bigArr[i];

        if(smallArr)
    }
    // get 3 random things from bigArr
    // check if it's not already in small array
    // if not in small array push to new choices
    // else continue loop 

    return newChoices;
}

test('no repeats', assert => {
    // arrange
    const bigArr = products;
    const smallArr = [{
        id: 'bag',
        name: 'Bag',
        image: 'assets/bag.jpg',
        shown: 0,
        selected: 0,
        shownLast: 0
    },
    {
        id: 'banana',
        name: 'Banana',
        image: 'assets/banana.jpg',
        shown: 0,
        selected: 0,
        shownLast: 0
    },
    {
        id: 'bathroom',
        name: 'Bathroom',
        image: 'assets/bathroom.jpg',
        shown: 0,
        selected: 0,
        shownLast: 0
    }];

    const expected = products.slice(3);
    console.log(expected);
    
    // act 
    const result = getNewRandom(bigArr, smallArr);


    // assert
    assert.equal(result.length, 3);

});