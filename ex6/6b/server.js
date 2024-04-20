
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const survey = require('./routes/survey')
const results = require('./routes/results')
const app = express();


app.use(bodyParser.json());
app.use(cors());

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Pet")
        console.log("MongoDB connected successfully")
    }
    catch(err){
        console.log(err)
    }
}

connectDB()




// Handle POST request to submit survey
app.post('/survey',survey)
   

// Handle GET request to fetch overall survey results
app.get('/survey/results',results) 

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});