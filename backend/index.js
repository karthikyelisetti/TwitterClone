const express = require('express')
const app = express()


app.get('/hello', (req,res) => {
    res.send('Hello World!');
})

app.get('/', (req,res) => {
    res.send("Welcome to my website")
})

app.post('/hello', (req,res) => {
    res.send("Hello POST");
})

app.listen(3000);

/*
CRUD
C -- Create | POST
R -- Read | GET
U -- Update | PUT
D -- Delete | DELETE
*/ 