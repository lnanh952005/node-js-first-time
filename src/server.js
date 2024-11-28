//Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
const express = require('express');
const path = require('path');
const app = express();// app cua express
const port = 8080;

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
    res.render('sample.ejs');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})