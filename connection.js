const mysql = require("mysql2");

const connection = mysql.createConnection({
 
    user :"root",
    password : "kama@2004",
    database :"securin"
})


connection.connect((err) => {
  if (err) {
      console.error('Error connecting to database:', err);
      return;
  }
  console.log('Database connection successful');
});


module.exports = connection;