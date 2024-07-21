const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// cookie parser lagana zaruri hai
app.use(cookieParser())

app.get('/', (req, res) => {
    let token = jwt.sign({email: "king@kohli.com"}, 'secret') // secret bahut risky cheez hai, isko aisa rkhna hota hai jo kabhi hack hi na kiya ja sake
    // secret ke basis pe oopar wala data encrypted hoga
    console.log('token:',token);
    // iss token ko bhejte hai to browser with cookie ki help se
    res.cookie('token', token)
    res.send('hello');
})

app.get('/read', (req, res) => {
  console.log('Read page route called');
  // yahan pe token check kr skte hain cookie mein
  console.log('Cookies:', req.cookies.token); // req.cookies ek object hota hai usme ek key ohta hai token
  
  // browser se token aa chuka
  // ab iss token ka data hum nikaalenge
  const data = jwt.verify(req.cookies.token, 'secret');
  console.log('data:',data);
  res.send('read page');
})


app.listen(3000, () => {
    console.log('server is running on 3000');
})