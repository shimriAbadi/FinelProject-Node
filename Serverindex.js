const express = require('express');

const app = express();

const path = require('path')

const bodyParser = require('body-parser')

const universitiesJsonArray = require("./Universities_Json.json");
const { send } = require('process');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

let universityArr = []

for(let i=0; i<universitiesJsonArray.length;i++){
    universitiesJsonArray[i]["counter"]=0;
}

app.get('/api/universities', (req, res) => {
    res.send(universitiesJsonArray);
});

app.post("/api/add",(req,res)=>{
    universityArr.push(req.body);
    res.status(201);
    res.send();
})

app.listen(3000, () => {

console.log(`Server started on port 3000`);

});