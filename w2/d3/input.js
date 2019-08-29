let currentKey = "w";

let directions = {
  w: {
    direction: "Move: up",
    opposite: "s"
  },
  a: {
    direction: "Move: left",
    opposite: "d",
  },
  s: {
    direction: "Move: down",
    opposite: "w"
  },
  d: {
    direction: "Move: right",
    opposite: "a"
  }
};


const setupInput = function (conn) {
  
  const directionsSet = new Set(["w","a","s","d"]);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }

    if (directionsSet.has(key) && key !== currentKey && key !== directions[currentKey].opposite) {
      currentKey = key;
    }
  };

  setInterval(() => {
    conn.write(directions[currentKey].direction);
  }, 1000);

  return stdin;
};

module.exports = { setupInput };

