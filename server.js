const fs = require("fs");
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path')
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
  const to = req.body.to; 
  const pw= req.body.password;  
 
	connection.query(
    'SELECT * FROM letter WHERE receiver = ? AND password = ?', [to, pw],    
    (err, rows, fields) => {     
      if (rows.length > 0) {
        sess.receiver = to;
        sess.password = pw; 
        //console.log(rows); 
        return res.status(200).send(rows);                            
      }
      else{      
        //console.log("else"); 
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
  //console.log("letter cred=" + letterTo + letterPw);
  connection.query(
    'SELECT * FROM letter WHERE receiver = ? AND password = ?', [letterTo, letterPw],
    (err, rows, fields) => {     
         res.send(rows); 
        
    });
});

app.get('/api/page', (req, res) => {
 
  connection.query(
    'SELECT * FROM page',
    (err, rows, fields) => {    
         res.send(rows);         
    });
});

//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
//

app.listen(port, () => console.log(`Listening on port ${port}`));