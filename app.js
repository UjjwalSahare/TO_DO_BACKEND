const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
//we are storing the data title and description in the array
let tasks = [];
//we created a route here
app.get('/', (req, res) => {
  res.render('index', {tasks: tasks});
});

    app.post('/create', (req, res) => {
        const {title, description} = req.body;
        if(!title || !description){ 
           return('Enter Title and Description');
        }
        tasks.push({title, description});

        res.redirect('/');
        });

        app.get(("/todos", function(req, res) {
           
          res.json(tasks);

        }));

app.listen(3000);