const app = require("express")();
require('dotenv').config();

const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

const viewEngine = require('./config/viewEngine');
const router = require('./routes/web');

viewEngine(app);

app.use('/users',router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
