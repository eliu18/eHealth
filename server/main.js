const express = require("express");
const app = express();
const config = require("./config");
const { PORT, HOST } = config

app.get('/login', function(req, res) {
    res.send('ok');
});

app.listen(PORT, HOST, () => {
    console.log(`Server at: ${HOST}:${PORT}`)
});