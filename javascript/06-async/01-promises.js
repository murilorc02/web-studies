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

function asyncTest(delay, fail = false) {
    return new Promise((resolve, reject) => {
        console.log('Simulating data fetch...')
        setTimeout(() => {
            if (fail) reject('Rejected by simulated error');
            if (typeof responseExample !== 'object') reject('Invalid response');
            resolve(responseExample);
        }, delay);
    })
}

// Method 1
/*
asyncTest(timer())
    .then((response) => { // Callback function - gets the response from resolve
        console.log('Response:', response)
    }).catch((err) => {
        console.error(err);
    });
*/

// Method 2
async function runAsyncTest() {
    try {
        var result = await asyncTest(timer());
        console.log(result);

        result = await asyncTest(timer(), true);
    } catch (e) {
        console.log(e);
    }
}

runAsyncTest();

console.log('\nThis will log before any promise\n');