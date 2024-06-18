/* Plugins. */
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

/* Helpers and Actions. */
const app = express();
const { port } = require('./config');

/* Routes */
const { adminRoutes } = require('./src/routes/adminRoutes')
const { userRoutes } = require('./src/routes/userRoutes');

/* Middlewares. */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('upload'));

app.use('/api/v1/', adminRoutes); /* Admin Routes. */
app.use('/api/v1/', userRoutes); /* User routes. */

app.listen(port, () => { console.log(`The server is running in the port: ${port}`) }); /* Place where server is being initiated. */