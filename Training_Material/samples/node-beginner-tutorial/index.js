const server = require('./server.js');
const router = require('./router');

server.start(router.route);