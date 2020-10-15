// artist.router.js

const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const artists = require('../modules/artist.data');

// GET all the books
router.get('/', (req, res) => {
    res.send(artists);
}); // END GET Route

module.exports = router;