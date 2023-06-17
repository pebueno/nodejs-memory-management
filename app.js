const express = require('express');

const app = express();

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

let tasks = [];

app.get('/', function(req, res) {
    tasks.push(function() {
        return req.headers
    })

    const hugeArray = new Array(100000000).fill(req)

    req.user = {
        id: 1,
        username: 'Inefficient User',
        badObject: req,
        hugeArray
    };

    // eventEmitter.on('start', () => {
    //     console.log('Useless event emitted')
    // })

    // eventEmitter.removeListener('start')

    // const resWithTimeout = 
    setTimeout(() => {
        res.send('Hello World!')
    })

    clearTimeout(resWithTimeout);
});

app.get('/other-url', function(req, res) {

});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on poirt ${port}`);
});


// Execute with: node --trace_gc app.js
// and, with: node --inspect app.js