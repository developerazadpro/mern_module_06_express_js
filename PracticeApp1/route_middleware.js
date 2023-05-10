const express = require('express')
const app = express()
const port = 8000;


// route middleware for specific route
app.use('/about', (req, res, next) => {
    console.log("I am about middleware");
    next();
})

app.get('/',  (req, res) => {
    res.send("Hello Express JS, How you doing?");
});

app.get('/about',  (req, res) => {
    res.send("About Page");
});


app.get('/contact',  (req, res) => {
    res.send("Contact Page");
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})