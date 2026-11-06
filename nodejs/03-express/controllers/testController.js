exports.loadTestPage = (req, res) => {
    console.log('\nParams:', req.params);
    console.log('Query:', req.query, '\n');
    //                      Params and query values can be specified
    res.send(`${req.params.mandatoryMsg}! My name is ${req.query.name}`);
}