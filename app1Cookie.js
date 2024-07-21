// cookies - session isliye hote hai taaki baar barr login na karna pade
// i) cokkie kaise set krte hain
// ii) bcrpyt kaise use krte hain for password encryption and decryption
// iii) JWT kya hai, aur JWT mein data kaise store krein aur bahar nikaalein

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

// to access cookies
app.use(cookieParser())
app.get('/', function (req, res) {
    res.cookie('name', 'harsh'); // cookie mtlb server se browser pe kuch data store krwa dena
    res.send('Hello');
})

app.get('/read', (req, res) => { // req -> request, res -> response
    // yahan pe cookies ko hum check bhi kar sakte hain
    console.log(req.cookies);
    res.send('read page');
})

app.listen(3000, () => {
    console.log('Server running on 3000');
})