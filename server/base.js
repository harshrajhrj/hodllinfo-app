const api = require('./models/api');
const app = require('express').Router();

app.get('/', async (req, res) => {
    try {
        const DATA = await api.find();
        res.render('hdli.ejs', { DATA });
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = app;