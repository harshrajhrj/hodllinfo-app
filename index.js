const connection = require('./connectDB');
connection();

const express = require('express');
const path = require('path');
const app = express();


// middleware to convert all data incoming and outgoing into JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs set engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'client')));

// render the landing page
// app.get('/', (req, res) => {
//     res.render('hdli.ejs');
// })

// include all routes from a base folder
app.use('/', require('./server/base'));
app.use('/', require('./server/refresh'));

app.listen(process.env.PORT || 3000, () => console.log("Listening on port 3000"))