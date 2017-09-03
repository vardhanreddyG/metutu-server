const express = require('express');

var appRoutes = function(Student){

	//creating express router
	var appRouter = express.Router();

	//signup route
	appRouter.route('/student/signup')
	.post(function(req,res){
		//checking if  user already exists
		Student.findOne({email:req.body.email},function(err,student){

			//if find error
			if(err)
				return res.json(err);

			//if user found
			if(student)
			 return res.json({msg:"found"});

			//if user not found

			if(!student){
				 var student = new Student(req.body);

				 //saving user to db
				 student.save(function(err,student){
				 	//saving to db err
				 	if(err)
				 		return res.json(err);

				 	res.json({msg:"ok",email:student.email,id:student._id})
				 })
			}

		})
	});

	appRouter.route('/student/login')
	.post(function(req,res){
		//checking if user exists
		Student.findOne({email:req.body.email},function(err,student){
			//finding err
			if(err)
				return res.send(err);

			//if user found
			if(student){
				res.json({msg:"ok",email:student.email,id:student._id})
			}

			if(!student){
				res.json({msg:"err"})
			}
		})
	});


	//user route
	appRouter.route('/students')
	.get(function(req,res){
            
		//getting all users
		Student.find(req.query,function(err,students){
			//db err
			if(err)
				return res.send(err);

			//return users
			res.json(students)
		})
	});

	appRouter.route('/student/:student_id')
	.get(function(req,res){

		Student.findById(req.params.student_id,function(err,student){
			//db error
			if(err)
				return res.send(err);

			//no user
			if(!student){
				 return res.json({msg:"err"})
			}

			res.json(student)
		})
	})
	.delete(function(req,res){

		  //find mentor

		Student.findById(req.params.student_id,function(err,student){
			//db error
			if(err)
				return res.send(err);

			student.remove(function(err){
			//db err
			if(err)
				return res.send(err);
			res.json('deleted')
		})
		});

		
	})














	//return appRouter
	return appRouter
};

//export appRoutes
module.exports = appRoutes;