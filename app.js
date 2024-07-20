// cookies - session isliye hote hai taaki baar barr login na karna pade
// i) cokkie kaise set krte hain
// ii) bcrpyt kaise use krte hain for password encryption and decryption
// iii) JWT kya hai, aur JWT mein data kaise store krein aur bahar nikaalein

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.cookie('name', 'harsh');
})

app.listen(3000, () => {
    console.log('Server running on 3000');
})