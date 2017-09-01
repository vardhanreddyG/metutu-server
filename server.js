const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const logger = require('morgan')
const Student = require('./models/student.js');
const Teacher = require('./models/teacher.js');
const routes = require('./routes/routes.js')(Student,Teacher);
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const url = "mongodb://localhost/app";

//db connection
mongoose.connect(url,{
	useMongoClient:true
})

var db = mongoose.connection;
db.on('error',function(){
	console.log('connection fail')
})
.once('open',function(){
	console.log('connection sucess')
})

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.use('/api',routes)


app.get('/',function(req,res){
	res.send("hello")
});


app.listen(port,function(){
	console.log('server is running on '+ port)
})