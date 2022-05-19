const mysql = require("mysql");
const dbConfig = require("./db.json");

const con = mysql.createConnection(dbConfig);

module.exports = function database(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  sql = "CREATE DATABASE IF NOT EXISTS nodeMySQL";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  
  sql = "CREATE TABLE IF NOT EXISTS nodeMySQL.contatos (name VARCHAR(255), contato VARCHAR(255), email VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
}