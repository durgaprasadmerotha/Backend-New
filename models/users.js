const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    posts: [ 
        {
            content: String,
            caption: String,
        }

    ]
})

module.exports = mongoose.model('user', userSchema)