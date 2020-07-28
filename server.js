const fs = require("fs");
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//var jsonParser = bodyParser.json()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({secret: 'ssshhhhh'}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");
const { response } = require("express");
var sess;

const connection = mysql.createConnection({
  host : conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();
/*
app.post('/api/read', function(req, res) {
  sess=req.session;
  var to = req.body.to; 
  var pw= req.body.password;
  console.log("server"+to+pw);

	connection.query(
    'SELECT * FROM letter WHERE receiver = ? AND password = ?', [to, pw],
    (err, rows, fields) => {      
      if (rows.length > 0) {
        sess.receiver = to;
        sess.password = pw; 			 
        console.log("length>0");
        console.log("rows = " + rows);
        return res.send(rows)
      }
      else {				
        console.log("else"); 
        sess.receiver = "error";
        sess.password = "error";
        return res.send("error");               
      }	
    }
  );	
  

});
*/
app.post('/api/read', function(req, res) {
 
  sess=req.session;
  const to = req.body.to; 
  const pw= req.body.password;  
 
	connection.query(
    'SELECT * FROM letter WHERE receiver = ? AND password = ?', [to, pw],    
    (err, rows, fields) => {     
      if (rows.length > 0) {
        sess.receiver = to;
        sess.password = pw; 
        console.log(rows); 
        res.status(200).send(rows);                     
      }
      else{      
        console.log("else"); 
        sess.receiver = "error";
        sess.password = "error";
        return res.status(400).send({"result":"false"});              
      }      
    })
  });      


app.get('/api/letter', (req, res) => {
  sess=req.session;
  const letterTo = sess.receiver;
  const letterPw = sess.password;
  console.log("letter cred=" + letterTo + letterPw);
  connection.query(
    'SELECT * FROM letter WHERE receiver = ? AND password = ?', [letterTo, letterPw],
    (err, rows, fields) => {     
        res.send(rows); 
    }
  );
});



app.listen(port, () => console.log(`Listening on port ${port}`));