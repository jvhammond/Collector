var stream = require('stream'),
        dgram  = require('dgram' ),
        _      = require('lodash'),
        util   = require('util'  );


function UdpStream(opts){
        this.settings = _.defaults(opts, {
                type: 'udp4',
                host: 'localhost',
                port: 8008
        });
        this.socket = dgram.createSocket(this.settings.type);
        stream.Writable.call(this);
}

util.inherits(UdpStream, stream.Writable);

UdpStream.prototype._write = function(chunk, encoding, done){
  this.socket.send(chunk, 0, chunk.length, this.settings.port, this.settings.host, done);
}

module.exports = UdpStream;
