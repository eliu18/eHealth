const express = require("express");
const app = express();
const config = require("./config/index");
const { PORT, HOST } = config;
const login = require("./services/apis/login");
const patient = require("./services/apis/patient");

app.use('/api/login', login);
app.use('/api/patient', patient);

app.listen(PORT, HOST, () => {
    console.log(`Server at: ${HOST}:${PORT}`);
});