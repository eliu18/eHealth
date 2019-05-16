const express = require("express");
const app = express();
const config = require("./config/index");
const { PORT, HOST } = config;
const login = require("./services/apis/login");
const patient = require("./services/apis/patient");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/login', login);
app.use('/api/patient', patient);

app.listen(PORT, HOST, () => {
    console.log(`Server at: ${HOST}:${PORT}`);
});