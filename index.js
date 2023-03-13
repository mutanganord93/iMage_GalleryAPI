
require('dotenv').config();
const express = require('express');
const PORT = 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const connectDB = require('./db/connect');
const gallery = require('./routes/gallery');
const app = express();
const axios = require('axios');

app.use(cors(corsOptions));

app.get('/pictures',async(req,res) =>{
    try {
        const apiKey = process.env.apiKey;
        const {query} = req.query;
        const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&query=${query}&client_id=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.json({msg:error});
    }  
})

app.use(gallery);


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_DB_URI);
        app.listen(PORT,()=>console.log(`server running on ${PORT}`));
    } 
    catch (error) {
        console.log(error);
    }

};

start();