//Intial setup
const express = require('express');
const app = express();
const port = 8000;



//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');


//set up folder for static files
app.use(express.static('assets'));



//connection to DB
const db = require('./config/mongoose');
const Task = require('./models/task');


//middleware

// To read form data
app.use(express.urlencoded());


//use express router
app.use("/",require('./routes'));




// starting the server by listening to a port
app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});



