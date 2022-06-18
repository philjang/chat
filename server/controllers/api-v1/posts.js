const express = require('express');
const router = express.Router();

// POST /api-v1/posts
router.post('/', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: POST /posts');
});

// PUT /api-v1/posts/:id
router.put('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: PUT /posts/:id');
});

// DELETE /api-v1/posts/:id
router.delete('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: DELETE /posts/:id');
});

module.exports = router;