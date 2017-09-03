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
	},
	subjects:{
		nodejs:{
			type:Boolean,
			default:false,
		},
		purescript:{
			type:Boolean,
			default:false
		},
		functionlPgrogramming:{
			type:Boolean,
			default:false
		},reactNative:{
			type:Boolean,
			default:false
		}
	},
	description:{
		type:String,
		required:true

	}
},{timestamps:true,collection:'mentor'})

//exporting model
module.exports = mongoose.model('mentor',donar);