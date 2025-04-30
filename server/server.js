// import express module
const express = require('express');

//create app using express
const app = express();

const PORT = 3000;

//when front end gives information it turns into js so we can use
app.use(express.json());

app.get('/', (req, res) => {
    res.send('it is working');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

  