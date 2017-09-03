const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Mentor = require('./mentor.js');
const mentorroute = require('./mentorRoutes')(Mentor)
const Student = require('./student');
const studentroute = require('./studentRoutes')(Student);
const path = require('path');
const cors = require('cors');
const morgan = require('morgan')

//port and mongodb url
const port = process.env.PORT || 4000;
const url ="mongodb://vishnu:vishnu@ds121014.mlab.com:21014/metutu";

//connection to mongodb
mongoose.connect(url,{
	useMongoClient:true
});

//get db connection
const db = mongoose.connection;

//checking connection
db.on('err',function(){
	console.log("connectig to db failed")
}).once('open',function(){
	console.log('connection to db sucess')
});

//using middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

//first route
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'))
});

//using routes
app.use('/api',studentroute);
app.use('/api',mentorroute)

//starting server
app.listen(port,function(){
	console.log('server is running on port' + port)
})