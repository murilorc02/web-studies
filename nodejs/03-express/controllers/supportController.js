// We can also send HTML code through res.send()
// The "name" tag at the input is what's going to include the value at the POST request's body to '/support'
const form = `
    <form action="/support" method="POST" id="post-form">
        <label> Any text </label>
        <input type="text" name="text"/>
        <button type="submit"> Submit </button>
    </form>
`;

exports.loadSupport = (req, res) => {
    res.send(form);
};

exports.postSupport = (req, res) => {
    // Reading with req.body since the value goes directly to the request's body
    res.send(`
        ${form}
        <h3> ${req.body.text} </h3>
    `);
};