const express =  require('express');
require('../services/database');
const router = require('../routes/index.router');

const app = express();
app.use(router);

app.listen(3000);