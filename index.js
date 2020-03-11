const express = require('express')
const app = express()

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: '172.17.0.3',
  database: 'UsersApi',
  user: 'root',
  password: 'root'
});

app.get('/', function (req, res) {
  res.send('Hello World !');
});

app.get('/users', function (req, res) {
  let sql = 'Select * from Users'
  connection.query(sql, function (err, result) {
    res.json(result);
  });
});

app.get('/users/:id', function (req, res) {
  let id = req.params.id.toString();
  let sql = 'Select * from Users where id=?';
  connection.execute(sql,[id], function (err, result) {
    res.json(result);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});