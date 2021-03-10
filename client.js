const net = require('net');

//establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15', 
    port: 50541
  });

  //interpret incoming data as test
  conn.setEncoding('utf8');

  conn.on('connect', function(data) {
    console.log("You have successfully connected to the server!");
    conn.write("Name: SYS");
    // setInterval(function () {
    //   conn.write("Move: up");
    // }, 50);  
  });

  conn.on('data', function(data) {
    console.log("Server says: you ded cuz you idled");
  });
  
  return conn;
};

module.exports = { connect } ;

