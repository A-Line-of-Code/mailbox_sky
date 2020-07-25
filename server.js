//const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const data = fs.readFileSync("./database.json");
//const conf = JSON.parse(data);
//const mysql = require("mysql");
//const { config } = require("process");

/*
const connection = mysql.createConnection({
  host : conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.password,
  database: conf.database
});

connection.connect();

app.get('/api/tech', (req, res) => {
  connection.query(
    "SELECT name,img,msg FROM TECH;",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
*/


app.get('/api/tech', (req, res) => {
 res.send([
  {
    "name":"1", 
    "img" : "1",
    "msg" : "1"
},
{
    "name":"11", 
    "img" : "11",
    "msg" : "11"
}
 ])
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));