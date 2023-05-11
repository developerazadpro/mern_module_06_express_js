const express = require('express');
const app = express();
const path = require('path')
const port = 8000;

// crete unique id using universally unique identifier UUIDv4
const { v4: uuidv4 } = require('uuid');

// Middleware to parse json in request body
app.use(express.json());

// serve static html file
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // send html file
    res.sendFile(path.join(__dirname, 'index.html'));
})


// get books
const books = [];
app.get('/books', (req, res) => {
    res.json(books)
})

// add book and return res
app.post('/books', (req, res) => {
    const {title, author, publishedDate} = req.body;
    if(!title || !author){
        return res.status(400).json({
            error: "Title and Author are required"
        })
    }

    // create a new book object with unique ID
    const book = {
        id: uuidv4(),
        title,
        author,
        publishedDate: publishedDate || null
    }
    // add the book to the collection
    books.push(book);

    // return response
    res.json(book)
})


// delete book
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;

    // find the index of the book containing specified ID
    const bookIndex = books.findIndex(book => book.id === bookId);

    // if bookIndex is -1, then book was not found
    if(bookIndex === -1){
        return res.status(404).json({
            message: "Book not found"
        })
    }
    // remove the book from collection
    const deletedBook = books.splice(bookIndex, 1)[0];

    res.json({
        message: "Book delete successful"
    })
})




app.listen(port,  () =>{
    console.log(`Server listening on port ${port}`)
})