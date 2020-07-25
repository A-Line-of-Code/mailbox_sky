const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const users = [
  {
    "receiver": "to",
    "password": "2"
  }  
]

const connection = mysql.createConnection({
  host : conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

app.get('/api/tech', (req, res) => {
  connection.query(
    "SELECT * FROM TECH;",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.get('/api/read', (req, res) => {
  connection.query(
    "SELECT * FROM letter WHERE id=0;",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

/*
app.post('/api/read', (req, res) => {
  let result = users.find(user=>user.receiver === req.body.receiver);
  if(result){
    if(result.password === req.body.password){
      res.status(200).send(
        {msg:"successful login."}
      )
    }else{
      res.status(200).send(
        {msg:"incorrect password."}
      )
    }
  }else{
    res.status(200).send(
      {msg:"Not a user"}
    )
  }
});
*/
app.listen(port, () => console.log(`Listening on port ${port}`));