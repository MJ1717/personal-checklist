// import express module
const express = require('express');

//create app using express
const app = express();

const PORT = 3000;

const tasks = [];


//when front end gives information it turns into js so we can use
app.use(express.json());

app.get('/', (req, res) => {
    res.send('he334o');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



//trigger when frontend send a post request on /tasks
app.post('/tasks', (req, res) => {
    const task = req.body;
  
    if (!task.title) {
        //400 for bad request
      return res.status(400).json({ error: "u need title" });
    }
  
    tasks.push(task);
  
    //201 for created succesfuly
    res.status(201).json({ message: "task added successfully", task });
  });



app.get('/tasks', (req, res) => {
    res.json(tasks);  // return all stored tasks
});

  