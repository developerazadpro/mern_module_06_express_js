const express = require('express');
const app = express();
const port = 8000;


// Middleware to parse json in request body
app.use(express.json());

// Route for the root URL
app.get('/', (req, res) => {
    res.send("Hello, World!");
});


app.get('/users', (req, res) => {
    // user array of object
    const users = [
        {
            name: "Azharul",
            age: 28
        },
        {
            name: "Asif",
            age: 29

        }
    ];
    res.status(200).json(users);
});





// start the server
app.listen(port,  () =>{
    console.log(`Server listening on port ${port}`)
})