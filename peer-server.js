var PeerServer = require('peer').PeerServer;
var server = PeerServer({
  proxied: true,
  port: process.env.PORT || 9000,
  path: '/peerjs'
});
