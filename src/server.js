//Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
const express = require('express');
const path = require('path');
const app = express();// app cua express
const webrouter = express.Router();
const configViewEngine = require('./config/viewEngine');
const { router } = require('./routes/web');
require('dotenv').config;

const { getHomePage } = require('./controllers/homeController');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
//khai báo route

app.use('/',getHomePage);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})