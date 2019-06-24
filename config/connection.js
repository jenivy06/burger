// Set up MySQL connection.
var mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
    console.log(process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "jzqp0wx30vy3lr1i",
        password: "gkwgwm79rvj54cju",
        database: "gqg6phdfpy1m7eag"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;