const express = require('express');

const port = 3000;
const app = express();
 
app.get('/' , (req, res) =>{
    res.send("hello")
})
app.post('/users', (req, res) =>{
    res.send("asjkdfksf")
})

app.listen(port, () =>{
    console.log(`Server is running in ss ${port}`);
})