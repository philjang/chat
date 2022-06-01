const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    try {

    } catch (error) {
        console.log(err)
        res.status(503).json({ msg : 'error'})
    }
})