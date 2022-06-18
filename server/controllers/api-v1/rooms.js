const express = require('express');
const router = express.Router();

// GET /api-v1/rooms -- READ all rooms
router.get('/', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: GET /rooms');
});

// POST /api-v1/rooms
router.post('/', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: POST /rooms');
});

// GET /api-v1/rooms/:id
router.get('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: GET /rooms/:id');
});

// PUT /api-v1/rooms/:id
router.put('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: PUT /rooms/:id');
});

// DELETE /api-v1/rooms/:id
router.delete('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: DELETE /rooms/:id');
});

module.exports = router;