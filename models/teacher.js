const mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
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
 Subjects:[String],
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



},{collection:'teacher',timestamps:true});

var TeacherModel = mongoose.model('teacher',TeacherSchema);
module.exports = TeacherModel
