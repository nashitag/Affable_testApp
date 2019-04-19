var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
const routes = require('./routes');


mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true });

mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongodb');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});

app.get('/', (req,res)=>{
    res.send('over here => / now')
})

//ADDING MIDDLEWARE
app.use(cors());
app.use(bodyparser.json());

//divert all the route calls to routes.js file
app.use('/api', routes);

const port = 3000;

app.listen(port, ()=>{
    console.log('server has been started at port 3000');
});