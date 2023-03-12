const express = require('express');
const router = express();
const axios = require('axios');



router.route('/pictures',async(req,res)=>{
    try {
        const val = req.query.query
        const apiKey = process.env.apiKey;
        const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&query=${val}&client_id=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;