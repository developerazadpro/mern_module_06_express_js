const express = require('express')
const app = express()
const port = 8000;


// app middleware for all route
app.use((req, res, next) => {
    console.log("I am app middleware")
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