const express = require('express');
const app = express();
const port = 8000;


// //use express router 

// app.use("/",require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');


//set up folder for static files
app.use(express.static('assets'));



//connection to DB
const db = require('./config/mongoose');
const Task = require('./models/task');


//middleware
app.use(express.urlencoded());



//adding the task to database

app.post('/add-task',function(req,res){  
    
    Task.create({
            description: req.body.desc,
            dueDate: req.body.date,
            category: req.body.cat,
        }, function(err,newTask){
            if(err){
                console.log('error in creating a contact');
                return;
            }

        console.log('***********',newTask);
        res.redirect('back');
    });
    
});


//deleting the task

app.post('/delete-task',function(req,res){
    console.log(req.body.tasks);
    var deleteTasks = req.body.tasks;

    if(deleteTasks===undefined){
        res.redirect('back');
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
    
    res.redirect('back');
    
    
});




//Displaying the home view
app.get('/',function(req,res){
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

});



// starting the server by listening to a port
app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});



