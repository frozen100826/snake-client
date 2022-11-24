const {connect} = require('/Users/mingunchoi/lighthouse/snake-client/client.js');
const {setupInput} = require('./input');

console.log('Connecting ...');

setupInput(connect());