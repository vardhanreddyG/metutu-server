const express = require('express');

var appRoutes = function(Mentor){

	//creating express router
	var appRouter = express.Router();

	//signup route
	appRouter.route('/mentor/signup')
	.post(function(req,res){
		//checking if  user already exists
		Mentor.findOne({email:req.body.email},function(err,mentor){

			//if find error
			if(err)
				return res.json(err);

			//if user found
			if(mentor)
			 return res.json({msg:"found",email:mentor.email});

			//if user not found

			if(!mentor){
				 var mentor = new Mentor(req.body);

				 //saving user to db
				 mentor.save(function(err,mentor){
				 	//saving to db err
				 	if(err)
				 		return res.json(err);

				 	res.json({msg:"ok",email:mentor.email,id:mentor._id})
				 })
			}

		})
	});

	appRouter.route('/mentor/login')
	.post(function(req,res){
		//checking if user exists
		Mentor.findOne({email:req.body.email},function(err,mentor){
			//finding err
			if(err)
				return res.send(err);

			//if user found
			if(mentor){
				res.json({msg:"ok",email:mentor.email,id:mentor._id})
			}

			if(!mentor){
				res.json({msg:"err"})
			}
		})
	});


	//user route
	appRouter.route('/mentors')
	.get(function(req,res){

		//getting all users
		Mentor.find({},function(err,mentors){
			//db err
			if(err)
				return res.send(err);
			//no mentors
			if(mentors == ""){
				 return res.json("no mentors")
			}

			//return users
			res.json(mentors)
		})
	});

	appRouter.route('/mentor/:mentor_id')
	.get(function(req,res){

		Mentor.findById(req.params.mentor_id,function(err,mentor){
			//db error
			if(err)
				return res.send(err);

			if(!mentor){
				 return res.json({msg:"err"})
			}

			res.json(mentor)
		})
	})
	.delete(function(req,res){

		  //find mentor

		Mentor.findById(req.params.mentor_id,function(err,mentor){
			//db error
			if(err)
				return res.send(err);

			if(mentor){
				mentor.remove(function(err){
					if(err)
						return res.send(err);
					   res.json("removed")
				})
			}
		});

	})














	//return appRouter
	return appRouter
};

//export appRoutes
module.exports = appRoutes;