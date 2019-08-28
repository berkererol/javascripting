onst connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.102',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  return conn;
}

module.exports = connect;
