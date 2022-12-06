const express = require('express');

const ejs = require('ejs');

const fetch = require('node-fetch');

const server = express();
const PORT = 3000;

server.set('views', './src/views');
server.set('view engine', 'ejs');

