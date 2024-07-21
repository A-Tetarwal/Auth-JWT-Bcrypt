const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // bcrypt.genSalt(10, (err, salt) => {
    //     console.log(salt);
    //     bcrypt.hash('password', salt, (err, hash) => {
    //         console.log(hash);
    //     })
    // })

    // ab comparison ya decrypt
    bcrypt.compare("password", "$2b$10$gLexPXjqv1JA9e2jHpLZC.A5/.E1x9tENwjg6t4nutuSiXX1nF8O2", (err, result) => {
        console.log(result);
    })
    res.send('hello');
})

app.listen(3000, () => {
    console.log('server is running on 3000');
})