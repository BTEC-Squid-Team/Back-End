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

const {getEventHandler} = require('./modules/data')

const getEvents  = require('./modules/event')

const {addEvent} = require('./modules/data')

const {deleteHandler} = require('./modules/data')

const {addComment} = require('./modules/comment')

const {deleteComment} = require('./modules/comment')

const  {updateComment} = require('./modules/comment')

const {getCommentHandler} = require('./modules/comment')

const mongoose = require('mongoose') 

mongoose.connect(`${process.env.MONGO_SERVER_LINK}`); 

// Routes
// http://localhost:3001/event?city=paris
server.get('/', home);
server.get('/event', getEvents);
server.get('/test', test);

server.get('/getEventHandler', getEventHandler);
server.post('/addEvent', addEvent);
server.delete('/deleteHandler', deleteHandler);

server.get('/getCommentHandler', getCommentHandler);
server.post('/addComment' , addComment);
server.delete('/deleteComment', deleteComment);
server.put('/updateComment', updateComment)

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