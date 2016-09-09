// Flame-Client
// Rafi Khan

// Require Modules
// Patch console with time stamp
var create_client = require('./client.js')
var $ = require("jquery");
var EventEmitter = require('eventemitter3');

// Events
var EE = new EventEmitter()

// Client
var client = new create_client({address: 'localhost:3000'})

$(document).ready(function() {

    // Login Button
    $(".submit").click(function(e){
        e.preventDefault()

        // Get input
        var user_name = $("#user_name").val()
        var password = $("#password").val()

        client.send("login", {user_name: user_name, password: password})

        console.log("button clicked")
    })

})

