const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log("First Middleware ..");
    req.user = 'KJW';
    next();
});

app.use(function(req, res, next) {
    console.log("Second Middleware ..");
    res.status(200).send(`<h1>${req.user} responds at Express Server</h1>`);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
