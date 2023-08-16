const express = require('express');
const config = require('./config/config');
const router = require('./routes');

const resourceConfig = config.ResourceConfig;

const server = express();
const port = resourceConfig.port;

server.use(express.json());

server.use('/', router);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});