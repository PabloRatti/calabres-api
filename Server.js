
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path');

const port = 3100;
// create express app
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./app/routes/note.routes.js')(app);

//El siguiente codigo detecta cuando se llama a una ruta inexistente y redirige a home (index.html)
app.use(function (req, res) {
    console.log('Getting home from app.use');
try{
res.header("Access-Control-Allow-Origin", "*");
res.sendFile(path.join(__dirname, '../build', 'index.html'))

console.log(path.join(__dirname, '../build', 'index.html'));
}catch(e){
console.log(e);
}
});
// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port port " + port);
});