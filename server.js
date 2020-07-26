const fs = require("fs");
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'ssshhhhh'}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");
var sess;

const connection = mysql.createConnection({
  host : conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

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
                 			
      }
      else {
        console.log("else"); 
        sess.receiver = "error";
        sess.password = "error";               
      }	
      res.end();		
    }
  );
  	
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

/*
app.get('/api/tech', (req, res) => {
  connection.query(
    "SELECT * FROM TECH;",
    (err, rows, fields) => { res.send(rows);}
  );
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));