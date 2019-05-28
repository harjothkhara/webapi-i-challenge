// implement your API here

// bringing in express from express package, having a REFERENCE to express inside of node module file
//import express
//express = lightweight
//routers -> organizing our endpoints
//middleware -> allows us expand and customize

// bring in express
const express = require('express');
//import express from 'express';
const db = require('./data/db.js') //import db.js



// create an express application, i want to have an app, i want to have a server, give me a server 
// so that i can configure that server, add my endpoints, add my resources to it, and then have it 
// listen for connections so that it can answer to requests coming
// into my server.

// gives us an instance of a server powered by express
// create our express application. call express to get our server
const server = express();

// when we're creating our server, pay attention to any get requests to '/' - root of our site, 
// when a get requests comes to the root of our site,
// then execute this callback function--request handler function;express provides the arguments, 
// request and response (send a string back) objects.

// server.get('/', (req, res) => {
// res.send('Hello World!');
// })

server.use(express.json()) //middleware


// server.get('/hobbits', (req, res) => {
//     const hobbits = [
//         {
//             id:1,
//             name: 'Samewise Gamgee'
//         },
//         {
//             id:2,
//             name: 'Frodo Baggins'
//         }
//     ];

//     res.status(200).json(hobbits);

// })

// 4. produce a response and send it back to the client within the route handler function of those endpoints

server.get('/api/users', (req, res) => {
    db.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ message: 'The users information could not be retrieved.'});
    })
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({ });
    })
})

server.post('/api/users', (req, res) => {
    db.insert(req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({ });
    })
})

server.delete('/api/users/id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
    .then(deleted => {
        res.status(204).end;
    })
    .catch(err => {
        res.status(500).json({ });
    })
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const userInfo = req.body
    db.update(id, userInfo)
    .then(updated => {
        if (updated) {
            res.status(200).json(updated)
        } else {
            res.status(404).json({ message: "User not found"})
        }
       
    })
    .catch(err => {

    })
})

// 5. tell our server to listen for connections on a particular prompt

server.listen(5000, () => {
    console.log('API up and running on port 5000')
})




//i want you to listen to requests coming into a particular port on my computer, and answer to those requests.

// server.listen(8000, () => console.log('API Running on port 8000'));
//this is a server, but it doesn't know about any endpoints just yet

// Basic Steps:
// 1. bring in express
// 2. create our express application, call express to get a server
// 3. wire any endpoints that we want to listen to
// 4. produce a response and send it back to the client within the route handler function of those endpoints
// 5. tell our server to listen for connections on a particular port

// how do we test: we run it!
