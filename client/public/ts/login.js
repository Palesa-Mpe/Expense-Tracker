const express = require('express');
const path = require('path');
const config = require('./src/config/config');


const {
  loginRouter,
  registerRouter,
} = require('./src/routes');

const resourceConfig = config.ResourceConfig;

const server = express();
const port = resourceConfig.port;

server.bo

server.use('/login', loginRouter);
server.use('/register', registerRouter);

server.listen(port, () => {
  console.log(`http://locaslhost:${port}`);
});
