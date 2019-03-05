//dependecies
var mysql = require("mysql");


//connecting to mysql (also using JawsDB to load up to heruko)
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MySql123",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//allows other pages to use this connection
module.exports = connection;