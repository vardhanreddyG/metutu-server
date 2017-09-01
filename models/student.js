const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
 Name:{
 	type:String,
 	lowercase:true
 },
 Email:{
 	type:String,
 	required:true,
 	unique:true,
 	lowercase:true
 },
 MobileNumber:{
 	type:Number,
 	unique:true,
 	required:true,
 },
 Role:{
 	type:String,
 	required:true,
 	lowercase:true
 },
 Location:{
 	Latitude:{
 		type:Number,
 		required:true
 	},
 	Longitude:{
 		type:Number,
 		required:true
 	}
 },



},{collection:'student',timestamps:true});

var StudentModel = mongoose.model('student',studentSchema);

module.exports = StudentModel
