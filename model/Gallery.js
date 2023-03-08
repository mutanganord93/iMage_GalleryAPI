const mongoose = require('mongoose');
const Picture = new mongoose.Schema({
    url:{type:String}
})
const GallerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide task']
    },
    data:[Picture]
})

module.exports = mongoose.model('Gallery',GallerySchema)