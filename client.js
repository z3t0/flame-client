// Flame-Client Client
// Rafi Khan

// Required Modules
var socket_io_client = require('socket.io-client')
var EventEmitter = require('eventemitter3')


module.exports = function(options) {
    return new Client(options)
}

function Client(options) {

    var client = {}

    var EE = new EventEmitter()

    var socket = socket_io_client(options.address);
    socket.on('connect', function(){
        console.log('Connected to server : ' + options.address)
    });

    socket.on('event', function(data){

    });

    socket.on('disconnect', function(){
        console.log('Disconnected from server : ' + options.address)
    });

    client.socket = socket

    client.send = send.bind(client)

    client.eventemitter = EE

    return client
}

function send (type, msg) {
    // Send to server
    this.socket.emit(type, msg)
}

