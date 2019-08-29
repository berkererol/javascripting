let connection;

const setupInput = function (conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") { // letter w, up
      conn.write("Move: up");
    }
    if (key === "a") {   // letter a, left
      conn.write("Move: left");
    }
    if (key === "d") { // letter d, right
      conn.write("Move: right");
    }
    if (key === "s") { // letter s, down
      conn.write("Move: down");
    }
  }

  return stdin;

};

module.exports = { setupInput };

