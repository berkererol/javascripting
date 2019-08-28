const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.102',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => { console.log('Server says: ', data )});

  conn.on('data', (msg) => { console.log(msg) });

  conn.on('connect', () => { conn.write('Hello from client!'); });

  conn.on('connect', () => { console.log('Connection is established') });

  conn.on('connect', () => { conn.write('Name: BRK') });

  conn.on('connect', () => { conn.write('Move: up') });

  return conn;
}

module.exports = { connect }