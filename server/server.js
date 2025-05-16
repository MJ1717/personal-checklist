// import express module
const express = require('express');

const cors = require('cors');


//create app using express
const app = express();


const PORT = 3000;



const tasks = [];

app.use(cors());

//when front end gives information it turns into js so we can use
app.use(express.json());

app.get('/', (req, res) => {
    res.send('im testing');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//app.post is triggered when frontend wants to send data to server
//trigger when frontend send a post request on /tasks
app.post('/tasks', (req, res) => {
    const task = req.body;
  
    if (!task.title) {
        //400 for bad request
      return res.status(400).json({ error: "u need title" });
    }
  
    tasks.push(task);
  
    //201 for created succesfuly
    res.status(201).json({ message: "Task added successfully", task });
  });



//app.get is triggered when frontend wants to get data from the server
app.get('/tasks', (req, res) => {
    res.json(tasks);  // return all stored tasks
});


//app.delete is triggered when frontend want to delete some information in the server
// thing after : is reqeust parameter. so now, index is the req parameter
app.delete('/tasks/:index', (req, res) => {
  //parseint is convert string to num. req.params.blah is getting the req param's value
  const index = parseInt(req.params.index);

  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1); //splice is javasciprt builtin. a.splice(start index, num of items want to remove)
    res.json({message: "task deleted"});
  }
  else {
    res.status(404).json({error: "task not there"});
  }
});

  