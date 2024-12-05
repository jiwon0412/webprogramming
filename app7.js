const express = require('express');
const app = express();

app.use(function(req, res, next) {
    const userAgent = req.header("User-Agent");
    const paramName = req.query.name;

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);  // Use backticks here for interpolation
    res.write(`<div><p>Param name: ${paramName}</p></div>`);  // Use backticks here for interpolation
    res.end();
});

app.listen(7000, function() {
    console.log('Server is running on port 3000');
});
