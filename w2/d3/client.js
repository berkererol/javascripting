const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', data => { console.log('Server says: ', data) });

  conn.on('data', msg => { console.log(msg) });

  conn.on('connect', () => { console.log('Connection is established') });

  conn.on('connect', () => { conn.write('Name: BRK') });

  conn.on('connect', () => { conn.write('Say: Hello friends!') });

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 1000);

  return conn;

};

module.exports = { connect }