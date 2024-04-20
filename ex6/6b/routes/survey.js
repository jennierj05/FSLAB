const express = require('express');
const Pet = require('../models/pet');

const app = express();

app.use(express.json());

app.post('/survey', (req, res) => {
    const surveyData = req.body;
    console.log(surveyData);

    // Create a new survey instance
    const survey = new Pet(surveyData);

    // Save the survey to the database
    survey.save()
        .then(() => {
            res.status(201).send('Survey submitted successfully.');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error submitting survey.');
        });
});

module.exports = app;
