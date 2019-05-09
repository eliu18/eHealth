const express = require("express");
const app = express();
const config = require("./config/index");
const { PORT, HOST } = config;
const login = require("./services/apis/login");

app.use('/api/login', login);

app.listen(PORT, HOST, () => {
    console.log(`Server at: ${HOST}:${PORT}`);
});