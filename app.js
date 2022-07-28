
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname, '.env')});
const express = require('express');
const mongoose = require('mongoose');
const {  ServerApiVersion, MongoClient } = require('mongodb');
const cors =  require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const { read } = require('fs');
const app = express();
const uri = `mongodb+srv://anthropoduser:${process.env.MONGO_PASSWORD}@cluster0.turudph.mongodb.net/anthropod?retryWrites=true&w=majority`


//mongodb database connection
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1})
.then(() => console.log('database is connected'))
.catch(err => console.log(err))

morgan.token('host',(req,res) =>{
	return req.hostname;
})

//middleware

// cors options

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(morgan(':method :host :status :res[content-type] - :response-time ms'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', true)
    
    next();
})

app.use('/api', routes);

app.listen(process.env.PORT,() => {
    console.log(`APP IS RUNNING ON PORT: ${process.env.PORT}`)
})