const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        res.send('/users');
    } catch (error) {
        console.log(err);
        res.status(503).json({ msg : 'error'});
    };
});

// POST /api-v1/users/register
router.post('/register', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: POST /users/register');
});

// POST /api-v1/users/login
router.post('/login', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: POST /users/login');
});

// GET /api-v1/users/:id -- READ rooms associated(favorited?) to user with :id
router.get('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: GET /users/:id');
});

// PUT /api-v1/users/:id
router.put('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: PUT /users/:id');
});

// DELETE /api-v1/users/:id
router.delete('/:id', async (req, res) => {
    res.send('NOT YET IMPLEMENTED: DELETE /users/:id');
});

module.exports = router;