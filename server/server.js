const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;



app.get('/', (req,res) => {
    res.json({ msg: 'hello'})
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users'))
app.use('/api-v1/rooms', require('./controllers/api-v1/rooms'))
app.use('/api-v1/posts', require('./controllers/api-v1/posts'))


app.listen(PORT, () => {
    console.log(`running server on port ${PORT}`)
})