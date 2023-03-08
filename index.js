const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const connectDB = require('./db/connect');
const gallery = require('./routes/gallery');
const app = express();

require('dotenv').config();
app.use(cors());
app.use(express.json());
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