const express = require('express');
const router = express();

// GET /users/:username/collections
// GET /users/:username/collections/:collection_id

// POST /users/:username/collections/:collection_id
// POST /users/:username/collections/:collection_id/add/:photo_id

// DELETE /users/:username/collections/:collection_id
// DELETE /users/:username/collections/:collection_id/remove/:photo_id

const{getCollection,
    getAllCollections,
    postPicInCollection,
    postCollectionInCollections,
    DelecteCollection,
    DeletePicInCollection,
    UpdateCollectionName} = require('../controllers/picture');


router.route('/').get(getAllCollections);
router.route('/:collection_id').get(getCollection).post(postCollectionInCollections).delete(DelecteCollection).patch(UpdateCollectionName);
router.route('/:collection_id/pics').post(postPicInCollection).delete(DeletePicInCollection);



module.exports = router;
