var mongoose = require('mongoose'),

//schema 
donar = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		lowercase:true,
		unique:true,
		required:true
	},
	image:{
		type:String,
	},
	mobile:{
		type:Number,
		required:true,
		unique:true
	},
	role:{
		student:{
			type:Boolean,
			default:false
		},
		mentor:{
			type:Boolean,
			default:false
		}
	},
	location:{
         latitude:{
         	type:Number,
         	required:true
         },
         longitude:{
         	type:Number,
         	required:true
         }
	}
},{timestamps:true,collection:'student'})

//exporting model
module.exports = mongoose.model('student',donar);