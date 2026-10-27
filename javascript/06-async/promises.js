const responseExample = [
    {
        name: 'Soda',
        price: 3.00
    },
    {
        name: 'Soap',
        price: 1.50
    },
    {
        name: 'Chocolate',
        price: 4.00
    },
]

function timer() {
    return Math.floor(Math.random() * 3000 + 1000);
}

function asyncTest(delay) {
    return new Promise((resolve, reject) => {
        console.log('Simulating data fetch...')
        setTimeout(() => {
            if (typeof responseExample !== 'object') reject('Invalid response');
            resolve(responseExample);
        }, delay);
    })
}

asyncTest(timer())
    .then((response) => { // Callback function - gets the response from resolve
        console.log('Response:', response)
    }).catch((err) => {
        console.error(err);
    });

console.log('\nThis will log before any promise\n');