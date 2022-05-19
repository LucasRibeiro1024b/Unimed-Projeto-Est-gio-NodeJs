const express = require("express");
const database = require("./Database");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const db = database();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
  let name  = req.body.nome;
  let phone = req.body.contato;
  let email = req.body.email;

  console.log(name);
  console.log(phone);
  console.log(email);

  
});

app.listen(3000, ()=>{
  console.log("Server running in port 3000.");
});