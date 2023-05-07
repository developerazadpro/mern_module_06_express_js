const express = require('express');
const port = 8000;
const app = express();

app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.send("Hello Express JS, How you doing?");
});

app.post('/about',  (req, res) => {
    res.send("About Page");
});

app.put('/contact',  (req, res) => {
    res.send("Contact Page");
});

app.listen(port,  () =>{
    console.log("Server Run Success.")
})