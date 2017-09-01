const express = require('express');

const appRouter = function(Student,Teacher){

	var apiRouter = express.Router();

	apiRouter.route('/students')
.get(function(req,res){

	Student.find(req.query ,function(err,students){
		if(err)
			return res.send(err)
		res.json(students)
	})
})
.post(function(req,res){
 
 var student = new Student(req.body);

 student.save(function(err){
 	if(err)
 		return res.json(err)
 	res.json("sucessfully inserted")
 })

})

apiRouter.route('/teachers')
.get(function(req,res){
	Teacher.find(function(err,teachers){
		if(err)
			throw err
		res.json(teachers)
	})
})
.post(function(req,res){
 
 var teacher = new Teacher(req.body);

 teacher.save(function(err){
 	if(err)
 		return res.json(err)
 	res.json("sucessfully inserted")
 })

})

return apiRouter;

}

module.exports = appRouter
