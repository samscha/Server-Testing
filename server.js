const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./api/apiRouter');

const server = express();

server.use(morgan('combined'));
server.use(express.json());
server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.send({ api: 'r u n n i n g . . .' });
});

module.exports = server;
