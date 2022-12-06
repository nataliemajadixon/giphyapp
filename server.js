const express = require('express');

const ejs = require('ejs');

const fetch = require('node-fetch');

const server = express();
const PORT = 3000;

server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    
    fetch('https://api.giphy.com/v1/gifs/trending?limit=10&api_key=MkJI3oqOdaTmFPwfvq1jyod3YyO6E1Sq')
        
        .then(response => response.json())
        // .then(data => console.log(data.data))
        .then(data => res.render('index', {data: data.data}))
        .catch((error) => console.error('Error from API'))
})