const express = require('express');
const path = require('path');
const config = require('../config/config');


const {
  loginRouter,
  registerRouter,
} = require('./src/routes');

const resourceConfig = config.ResourceConfig;

const app = express();
const port = resourceConfig.port;

app.use('/', express.static(path.join('client')));
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`http://locaslhost:${port}`);
});