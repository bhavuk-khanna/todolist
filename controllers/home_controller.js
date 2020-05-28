const Task = require('../models/task');

// Home screen module 
module.exports.home= function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('Error in fetching contacts from db');
            return;

        }
        return res.render('home', 
        {
            title: "My Contacts List",
            taskList: tasks
        });
    });

}
 
// Add task Module

module.exports.addTask = function(req,res){  
    
    Task.create({
            description: req.body.desc,
            dueDate: req.body.date,
            category: req.body.cat,
        }, function(err,newTask){
            if(err){
                console.log('error in creating a contact');
                return;
            }

       return res.redirect('back');
    });
    
}


//Delete task module

module.exports.deleteTask = function(req,res){
    var deleteTasks = req.body.tasks;

    if(deleteTasks===undefined){
        return res.redirect('back');
    }
    else if(typeof(deleteTasks)==="string"){
        Task.findByIdAndDelete(deleteTasks,function(err,contacts){
                    if(err){
                        console.log('Error in deleting object from  db');
                         return;
            
                    }
        });
    }
    else{
        for(let i=0;i<deleteTasks.length;i++){
            Task.findByIdAndDelete(deleteTasks[i],function(err,contacts){
                if(err){
                    console.log('Error in deleting object from  db');
                     return;
        
                }
            });
        }
    }
    
    return res.redirect('back');
    
    
};

