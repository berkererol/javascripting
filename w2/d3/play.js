const { connect } = require('./client');

const net = require('net');

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();