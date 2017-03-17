const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;


/*
* Basic Express routing definition
 * app.METHOD(PATH, HANDLER)
 * app.get (where app is  the instance of express and get is the HTTP request method)
 * ('/', (req, res) => {} where '/' is the path on the server that takes a function that takes in a req, res handler when the route is matched. (req = request, res = response).
 * res.send('Hello World) after express goes and gets the page requested res.send will respond with Hello World.
*/

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, (err) => {
    if (err) {
        throw err;
    } else
    console.log('Listening to sever on port:' + port)
});
