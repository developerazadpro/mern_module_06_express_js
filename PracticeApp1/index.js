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
    // Working With Response
    // simple string response
    app.get('/string-response', (req, res) => {
        res.end("Simple string response");
    });

    // status code response
    app.post('/status-code-response', (req, res) => {
        res.send(204).end();
    })
    // json response
    app.post('/json-response', (req, res) => {
        const myArray = [
            {
                name: "Rakib",
                age: 25
            },
            {
                name: "Rifat",
                age: 30
            }
        ];
        res.json(myArray).end();
    })

    // download response
    app.get('/download-response', (req, res) => {
        res.download("./http-status-code.txt");
    });

    // redirect response
    app.get('/redirect-response', (req, res) => {
        res.redirect("redirected");
    });
    app.get('/redirected', (req, res) => {
        res.end("this is redirected url");
    });

    // header response
    app.get('/header-response', (req, res) => {
        res.append("name", "azharul");
        res.append("age", "28");
        res.append("occupation", "student");
        res.status(204)
        res.end("Hello Header Response");
    });

    // set cookie response
    app.get('/set-cookie-response', (req, res) => {
        res.cookie("name", "Farhan");
        res.cookie("age", "25");
        res.cookie("city", "Dhaka");
        res.status(201)
        res.end("Cookie set success");
    });
    // clear cookie response
    app.get('/clear-cookie-response', (req, res) => {
        res.clearCookie("name");
        res.clearCookie("age");
        res.clearCookie("city");
        res.status(201)
        res.end("Cookie clear success");
    });
    // Response End

    // Working with Request
    // simple get request
    app.get('/simple-get', (req, res) => {
        res.end("simple get request");
    });

    // get request with url query
    app.get('/get-query-parameter', (req, res) => {
        let firstName = req.query.firstName;
        let lastName  = req.query.lastName;
        res.end(firstName+' '+ lastName);
    })
    // get request in header
    app.get('/get-req-header', (req, res) => {
        let firstName = req.header("firstName");
        let lastName  = req.header("lastName");
        let userAgent  = req.header("User-Agent");
        res.end(firstName+' '+ lastName + ' User Agent => ' + userAgent);
    })
    // post request same as above get request
    app.post('/simple-post', (req, res) => {
        res.end("simple get request");
    });

    // get request with url query
    app.post('/post-query-parameter', (req, res) => {
        let firstName = req.query.firstName;
        let lastName  = req.query.lastName;
        res.end(firstName+' '+ lastName);
    })
    // get request in header
    app.post('/post-req-header', (req, res) => {
        let firstName = req.header("firstName");
        let lastName  = req.header("lastName");
        let userAgent  = req.header("User-Agent");
        res.end(firstName+' '+ lastName + ' User Agent => ' + userAgent);
    })
    // Request End