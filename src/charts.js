import store from './data/store.js';

const productChartData = store.get('products');

const shownArray = [];
const selectedArray = [];

const listingNames = [];

for(let i = 0 ; i < productChartData.length; i++) {
    const name = productChartData[i].name;
    listingNames.push(name);

    const seen = productChartData[i].shown;
    shownArray.push(seen);

    const selected = productChartData[i].selected;
    selectedArray.push(selected);
}

const resultGraph = document.getElementById('results-chart').getContext('2d');

// eslint-disable-next-line no-unused-vars
const results = new Chart(resultGraph, {
    type: 'bar',
    data: {
        labels: listingNames,
        datasets: [
            {
                label: '# of times shown',
                data: shownArray,
                backgroundColor: 'orange'
            },
            {
                label: '# of times selected',
                data: selectedArray,
                backgroundColor: 'pink'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});