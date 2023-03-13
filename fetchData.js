const express = require('express');
const axios = require('axios');



const fetchData = async(req,res)=>{
    try {
        const val = req.query.query;
        const apiKey = process.env.apiKey;
        const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&query=${val}&client_id=${apiKey}`;
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = fetchData;