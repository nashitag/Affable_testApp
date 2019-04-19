const http = require('http');
const app = require('./app');
//zudfhdshuljdsfljsdfjljd
const port = 3000;

const server = http.createServer(app);

server.listen(port, () =>{
    console.log('server started!')
});


// var express = require("express");
// var myParser = require("body-parser");
// var app = express().Router();  //This Express-Object is essential and used to set up the application itself, add routes and rest-endpoints initialize middleware.
// app.listen(8000, () => {
//     console.log('Server started!')
//   })
//   const cors = require('cors')

// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// }

// // app.use(cors(corsOptions))

//   //we get a list of all objects of an endpoint, by sending a get request to that endpoint directly.
  
//   //Now, we have to tell our server, what to do, if it receives a request at that endpoint.
  
  
//   app.route('/').get((req, res) => {
//       console.log(res)
//       res.send('Hello World!');
//   })
//   //To define a route, we call the route-method on our express object. Next, we wall the get-method on that route, to tell express that we want to register a callback for the HTTP-get request at that specific route.

//   app.route('/:username').get((req, res) => 
//   {
//     const requestedCatName = req.params['username']
//     res.send({ username: requestedCatName })
//   })



