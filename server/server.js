// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const artistRouter = require('./routes/artist.router.js');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/#/emerson', artistRouter);
app.get('/test', (req, res) => {
    console.log('eureka!');
    // console.log(res.data);
    res.send({quote: "i like goop and catnip"});
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});

