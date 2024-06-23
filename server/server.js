const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const items = require('./routes/items');

app.use('/api/items', items);

app.get('/api', (req, res)=>{
    res.send('Hello World');
})

app.listen(5000, ()=>{
    console.log("Listening at 5000!")
})