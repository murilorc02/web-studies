// I also installed Nodemon at the dev dependencies for live coding with: npm install nodemon --save-dev
//Run cmd at root (auto reboot on change, custom command at package.json): npm run dev
//Run cmd at root (manual reboot needed on change): node testServer

const express = require('express'); // For making CRUD HTTP requests
const routes = require('./routes.js');
const app = express();

// I'll use the express.urlencoded() middleware for reading the keys from the HTML form's POST request
app.use(express.urlencoded({ extended: true }));
//                                      └ Supports nested objects instead of flat strings

app.use(routes); // Routes were delegated to router.js

const port = 3000;
app.listen(port, () => { // Starts the server
    console.log(`\nServer running at port ${port}\n`);
    console.log(`Base address: http://localhost:${port}`);
    console.log(`Test for request body: http://localhost:${port}/support`);
    console.log(`Test for query params: http://localhost:${port}/test/123/Hi?name=Jeff`);
});
