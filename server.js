'use strict'
// PORT=3001
const cors = require('cors');
const express = require('express');
require('dotenv').config();     
const axios = require('axios')
const server = express();
const PORT = process.env.PORT;
server.use(cors());


const getEvents  = require('./modules/event') 

// Routes
server.get('/', home);
server.get('/event', getEvents);
server.get('/test', test);
server.get('*', notFound);

// Function Handlers

//  http://localhost:3001/
function home(request, response) {

    response.status(200).send('home route')

}

// http://localhost:3001/test
function test(request, response) {
    response.send('every thing is working')
}

function notFound(request, response) {
    response.status(404).send('404 not found')
}

server.listen(PORT, () => {
    console.log(`PORT is working ${PORT}`)
})