'use strict'
// PORT=3001
const express = require('express');

const cors = require('cors');

require('dotenv').config(); 

// const axios = require('axios')

const server = express();

server.use(cors());

const PORT = process.env.PORT;

server.use(express.json()); 


const getEvents  = require('./modules/event')

const {addEvent} = require('./modules/data')

const mongoose = require('mongoose') 

mongoose.connect(`${process.env.MONGO_SERVER_LINK}`); 

// Routes
// http://localhost:3001/event?city=paris
server.get('/', home);
server.get('/event', getEvents);
server.get('/test', test);
server.post('/addEvent', addEvent);
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