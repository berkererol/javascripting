const { connect } = require('./client');
const { setupInput } = require('./input');
const net = require('net');

console.log('Connecting ...');

// connect();

setupInput(connect());

// module.exports = connect();