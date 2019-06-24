var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "com1hudvh1lgr996",
  password: "m2uasnomwz47ep45",
  database: "rkhzdj91iilbdphg"
});

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'com1hudvh1lgr996',
    password: 'm2uasnomwz47ep45',
    database: 'rkhzdj91iilbdphg'
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;