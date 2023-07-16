const dbSetup = require('./db/db-setup')
const express = require('express')
const User = require('./db/models/user')

dbSetup();
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())

app.get('/user/:id',async (req,res) =>{
    try {
        const {id} = req.params
        const user = await User.query().findById(id).withGraphFetched('channel')
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})


app.listen(PORT,()=>{
    console.log(`serve running on port ${PORT}`)
})