const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        console.log(salt);
        bcrypt.hash('password', salt, (err, hash) => {
            console.log(hash);
        })
    })
    res.send('hello')
})

app.listen(3000, () => {
    console.log('se rver is running on 3000');
})