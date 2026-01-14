require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 3000;
const connectionDB = require('./config/connection.db');

connectionDB()

app.listen(port, () => console.log(`Listening on port ${port}`));