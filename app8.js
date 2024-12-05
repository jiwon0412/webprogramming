const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const static = require('serve-static');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    const parmId = req.body.id || req.query.id;
    const parmPassword = req.body.password || req.query.password;

    res.send(`
        <h1>서버에서 응답한 결과</h1>
        <div><p>id: ${parmId}</p></div>
        <div><p>password: ${parmPassword}</p></div>
        <br><br><a href='/login1.html'>로그인 페이지로 돌아가기</a>
    `);
});

app.listen(3000, function() {
    console.log('http://localhost:3000');
});
