const PORT = 8000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', function(req, res){
    res.json("Hello");
})

app.get('/result', function(req, res){
    res.json('This is awesome');
})



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

