const express = require('express');
const config = require('./config/config');
const router = require('./routes');

const resourceConfig = config.ResourceConfig;

const app = express();
const port = resourceConfig.port;

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});