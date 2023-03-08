const Picture = require('../model/Gallery');

// router.route('/').get(getAllCollections);
// router.route('/:collection_id').get(getCollection).post(postCollectionInCollections).delete(DelecteCollection);
// router.route(':collection_id/:photo_id').post(postPicInCollection).delete(DeletePicInCollection);

const getAllCollections = async(req,res)=>{
    try {
        const collections = await Picture.find({});
        res.status(200).json({collections});
    } catch (error) {
        res.status(500).json({msg:error});
    }
} 

const getCollection = async(req,res)=>{
   try {
    const {collection_id} = req.params;
    const collection = await Picture.findOne({name:collection_id})
    if(!collection){
        return res.status(404).json({msg:`No Such A collection : ${_id}`})
    }
    res.status(200).json({collection});
    
   } catch (error) {
    res.status(500).json({msg:error});
   }
}
// /:collection_id ,postCollectionInCollections
// /:collection_id/:photo_id, postPicInCollection
const postCollectionInCollections = async(req,res)=>{
   try {
        const collection = await Picture.create(req.body);
        res.status(200).json({collection});
    } catch (error) {
    res.status(500).json({msg:error});
   }
}

const postPicInCollection = async(req,res)=>{
    try {
        // const collection = await Picture.create(req.body);
        const {collection_id} = req.params;
        const collection = await Picture.findOneAndUpdate({
            name:collection_id
        },{
            $push:{
                data:req.body
            }
        })

        res.status(200).json({collection});
    } catch (error) {
    res.status(500).json({msg:error});
   }
}

const DelecteCollection = async(req,res)=>{
    const {id} = req.query;
    const {collection_id} = req.params;
    try {
        const collection = await Picture.findOneAndDelete({_id:id});
        if(!collection){
            return res.status(404).json({msg:`Collection: ${collection_id} doesn't exists`})
        }
        res.status(200).json({collection});
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
const DeletePicInCollection = async(req,res)=>{
    const {id} = req.query;
    const {collection_id} = req.params;
    try {
        const pic = await Picture.findOneAndUpdate(
            {name:collection_id},
            {$pull:
                {
                    data:{_id:id}
                }
            });
        if(!pic){
            return res.status(404).json({msg:`Picture: ${pic} doesn't exists`})
        }
        res.status(200).json({pic});
    } catch (error) {
        res.status(500).json({msg:`${error} ${collection_id} ${id}`});
    }
};

const UpdateCollectionName = async(req,res)=>{
    try {
        const {collection_id} = req.params;
        const update = req.body;
        const pic = await Picture.findOneAndUpdate(
            {name:collection_id},
            {$set:update});
        if(!pic){
            return res.status(404).json({msg:`Collection: ${pic} doesn't exists`})
        }
        res.status(200).json({pic});
    } catch (error) {
        res.status(500).json({msg:`${error} ${collection_id}`});
    }
};

module.exports = 
{DelecteCollection,
DeletePicInCollection,
postPicInCollection,
postCollectionInCollections,
getAllCollections,
getCollection,
UpdateCollectionName}