const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const visitPageCountRouter = require('./routers/visitPageCount.router');

app.use(express.json());
app.use(helmet())
app.use(cors())

app.use('/visit-page-count', visitPageCountRouter)

module.exports = app
