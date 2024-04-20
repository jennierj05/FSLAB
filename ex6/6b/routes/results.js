const express = require('express');
const PetSurvey = require('../models/pet');

const app = express();

app.get('/survey/results', (req, res) => {
    PetSurvey.find()
        .then(surveys => {
            res.json(surveys);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching survey results.');
        });
});

module.exports = app;
