const express = require('express');
const app = express();
const connectToDb = require("./config/mongoose");
connectToDb()
const usermodel = require("./models/users")


app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/create-user', async (req, res, next) => {
    const user = await usermodel.create({
        username: 'a',
        email: 'a@a.com'
    })
    res.send(user);
})

app.get('/get-user/:username', async (req, res, next) => {
    const user = await usermodel.findOne({
        username: req.params.username
    })
    res.send(user);

})


app.get('/create-post/:username', async (req, res, next) => {
    const user = await usermodel.findOne({
        username: req.params.username
    })
    
    user.posts.push({
        content: ""
    })

})


app.listen(3000, () => {
    console.log('server is running on port 3000');  
    
})