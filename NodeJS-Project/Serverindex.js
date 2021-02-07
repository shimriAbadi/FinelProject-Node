const express = require('express');

const app = express();

const path = require('path')

const bodyParser = require('body-parser')

const universitiesJsonArray = require("./Universities_Json.json");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));


 app.get('/api/universities', (req, res) => {
    res.send(universitiesJsonArray);
});



app.listen(3000, () => {

console.log(`Server started on port 3000`);

});