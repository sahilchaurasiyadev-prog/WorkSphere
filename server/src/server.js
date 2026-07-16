const express = require('express');
const app = express();
const port = 5000;

app.get ('/', (req, res) =>{
    res.send("Hello Sahil");
});

app.listen(port, () =>{
    console.log(`Port is listening at http://localhost:${port}`);
});