const Task = require('../models/task');

module.exports.addTask= function(req,res){
    
    console.log(req.query);
    res.redirect('back');
    // Task.create({
    //     description: req.body.desc,
    //     dueDate: req.body.dueDate,
    //     category: req.body.cat,
    // }, function(err,newTask){
    //     if(err){
    //         console.log('error in creating a contact');
    //         return;
    //     }

    //     console.log('***********',newTask);
    //     res.redirect('back');
    // });
 }
 
 