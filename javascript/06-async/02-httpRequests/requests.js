// "Legacy" method - Using ajax to make a GET request
const request = (obj, forceReject = false) => {
    return new Promise((resolve, reject) => {
        if (forceReject) reject({ code: '500', msg: 'Internal server error' }); // For testing
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else reject({
                code: xhr.status,
                msg: xhr.statusText
            });
        });
    });
}

document.addEventListener('click', (e) => {
    const el = e.target;
    const url = el.getAttribute('href');

    if (el.tagName.toLowerCase() == 'a') {
        e.preventDefault();
        callContentLoad(url);
        callContentLoadAxios();
    }
});

// Ajax + No async =================================================================
/*function callContentLoad(url) {
    const requestBody = {
        method: 'GET',
        url: url
    };

    request(requestBody)
        .then(response => loadContent(response))
        .catch(reject => console.log(`ERROR ${reject.code}: ${reject.msg}`));
}*/

// Ajax + Async ====================================================================
/*async function callContentLoad(url) {
    const requestBody = {
        method: 'GET',
        url: url
    };

    try {
        const response = await request(requestBody);
        loadContent(response);
    } catch (e) {
        console.error(`ERROR ${e.code}: ${e.msg}`)
    }
}*/

// Fetch API + No async ============================================================
/*function callContentLoad(url, forceError = false) {
    fetch(url)
        .then(response => {
            if (!(response.status >= 200 && response.status < 300) || forceError)
                throw { code: response.status, msg: response.statusText };
            return response.text();
        })
        .then(html => loadContent(html)) // Gotta use "then" twice because response.text() returns a promise
        .catch(err => console.error(`ERROR ${err.code}: ${forceError ? 'Forced error caused by testing' : err.msg}`));
}*/

// Fetch API + Async ===============================================================
async function callContentLoad(url, forceError = false) {
    try {
        const response = await fetch(url);

        if (!(response.status >= 200 && response.status < 300) || forceError)
            throw { code: response.status, msg: response.statusText };

        const content = await response.text();
        loadContent(content);
    } catch (err) {
        console.error(`ERROR ${err.code}: ${forceError ? 'Forced error caused by testing' : err.msg}`)
    }
}

// Axios + Async
async function callContentLoadAxios() {
    axios('objects.json').then(response => console.log(response.data)); // No need for a second "then"
}

function loadContent(response) {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = response;
}