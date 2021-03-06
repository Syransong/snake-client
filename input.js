// Stores the active TCP Connection object
let connection;

// Setup Input Interface 
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  
  return stdin;
};


const handleUserInput = function(input) {
  if (input ==='\u0003') {
    process.exit();
  };
  if (input === 'w') {
    connection.write('Move: up');
  };
  if (input === 's') {
    connection.write('Move: down');
  };
  if (input === 'a') {
    connection.write('Move: left');
  };
  if (input === 'd') {
    connection.write('Move: right');
  };
  if (input === 'j') {
    connection.write('Say: Is this working');
  };
  if (input === 'k') {
    connection.write('Say: Seems so!'); 
  };
  if (input === 'l') {
    connection.write('Say: Thank Goodness');
  }
};

module.exports = { setupInput };