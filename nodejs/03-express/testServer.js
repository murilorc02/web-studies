// I also installed Nodemon at the dev dependencies for live coding with: npm install nodemon --save-dev
//Run cmd at root (auto reboot on change, custom command at package.json): npm run dev
//Run cmd at root (manual reboot needed on change): node testServer 

const express = require('express'); // For making CRUD HTTP requests
const app = express();

// I'll use the express.urlencoded() middleware for reading the keys from the HTML form's POST request
app.use(express.urlencoded({ extended: true }));
//                                      └ Supports nested objects instead of flat strings 

app.get('/', (req, res) => {
    res.send('Hello!'); // This will be the message shown whenever we access localhost:3000
});

// We can also send HTML code through res.send()
// The "name" tag at the input is what's going to include the value at the POST request's body to '/support'
const form = `
    <form action="/support" method="POST" id="post-form">
        <label> Any text </label>
        <input type="text" name="text"/>
        <button type="submit"> Submit </button>
    </form>
`;

app.get('/support', (req, res) => {
    res.send(form);
});

app.post('/support', (req, res) => {
    // Reading with req.body since the value goes directly to the request's body
    res.send(`
        ${form}
        <h3> ${req.body.text} </h3>
    `);
});

// : = Param  | ?eg=value&eg2=value2 = Query
//                                        ╔ Old syntax is simply ':optionalParam?' with no brackets
app.get('/test/:mandatoryId/:mandatoryMsg{/:optionalParam}', (req, res) => {
    console.log('\nParams:', req.params);
    console.log('Query:', req.query, '\n');
    //                      Params and query values can be specified
    res.send(`${req.params.mandatoryMsg}. My name is ${req.query.name}`);
});

const port = 3000;
app.listen(port, () => { // Starts the server
    console.log(`\nServer running at port ${port}\n`);
    console.log(`Base address: http://localhost:${port}`);
    console.log(`Test for request body: http://localhost:${port}/support`);
    console.log(`Test for query params: http://localhost:${port}/test/123/Hi?name=Jeff`);
});
