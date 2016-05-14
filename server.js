// This is the javascript file which would launch a http server on node

// Define and initialize all the required properties and functions we need to launch the application
var os = require("os");
var ifaces = os.networkInterfaces();
var express = require("express");
var fs = require("fs");
var PORT = process.env.PORT || 80;
var app = null;
var getServerIp = function() {

	for ( var network in ifaces ) {

		if ( network.toLowerCase() === "local area connection" ) {
			
			for (var i = 0; i < ifaces[network].length; i += 1) {
				
				if ( ifaces[network][i]["family"] === "IPv4" ) {
					return ifaces[network][i]["address"];
				}

			}
				
		}
		
	}
};

var ipaddress = getServerIp() || "localhost";

// Here we will define and invoke an IIFE function which would create a http server to serve a static index.html file.
(function() {

	app = express();
	app.use(express.static('.'));
	app.listen(PORT, ipaddress, function(){
        console.log("The current directory where this script resides is: " + __dirname);
		console.log("\nThe server IP address and port details are as follows:\n");
		console.log("Server port: " + PORT + "\nServer address: " + ipaddress);
	});

})();