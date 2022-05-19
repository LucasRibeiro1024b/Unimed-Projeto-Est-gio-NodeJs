const express = require("express");
const database = require("./Database");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const dbConfig = require("./db.json");
const { send } = require("express/lib/response");
const con = mysql.createConnection(dbConfig);
const app = express();
const db = database();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
  let name  = req.body.nome;
  let phone = req.body.contato;
  let email = req.body.email;

  const sql = "INSERT INTO nodeMySQL.contatos VALUES ('"+name+"',"+phone+",'"+email+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });

  res.sendFile(__dirname + "/index.html");
});

app.get("/Lista", function(req, res){
  res.sendFile(__dirname + "/lista.html");
});

app.get("/ListAll", function(req, res){
  const sql = "SELECT * FROM nodeMySQL.contatos ORDER BY name";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    // console.log(result[0].name);
    res.send(result);
  });
});

app.listen(3000, ()=>{
  console.log("Server running in port 3000.");
});