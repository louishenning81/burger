var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "gkq4tsnidrn1eayd",
    password: "ck2yx3pnnr7al2uu",
    database: "nikrtkvkr58ssbfy"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;