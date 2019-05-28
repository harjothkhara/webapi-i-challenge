// implement your API here

// bringing in express from express package, having a REFERENCEto express inside of node module file
const express = require('express');
//import express from 'express';

// create an express application, i want to have an app, i want to have a server, give me a server 
// so that i can configure that server, add my endpoints, add my resources to it, and then have it 
// listen for connections so that it can answer to requests coming
// into my server.

// gives us an instance of a server powered by express
const server = express();

// when we're creating our server, pay attention to any get requests to '/' - root of our site, 
// when a get requests comes to the root of our site,
// then execute this callback function--request handler function;express provides the arguments, 
// request and response (send a string back) objects.
server.get('/', (req, res) => {
res.send('Hello World!');
})

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id:1,
            name: 'Samewise Gamgee'
        },
        {
            id:2,
            name: 'Frodo Baggins'
        }
    ];

    res.status(200).json(hobbits);

})



//i want you to listen to requests coming into a particular port on my computer, and answer to those requests.

server.listen(8000, () => console.log('API Running on port 8000'));
//this is a server, but it doesn't know about any endpoints just yet

// Basic Steps:
// 1. bring in express
// 2. create our express application
// 3. wire any endpoints that we want to listen to
// 4. produce a response and send it back to the client within the route handler function of those endpoints
// 5. tell our server to listen for connections on a particular port

// how do we test: we run it!
