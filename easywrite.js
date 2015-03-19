var serialPort = require("serialport"),
		SerialPort = require("serialport").SerialPort,
		config = require("./config.js");

var sp = new SerialPort(config.serialPort, {
	baudrate: config.baudRate
}, false);

function write(message) {
	sp.open(function(err) {
		sp.write(message, function(err, res) {
			if (err) {
				console.log(err);
			}
			sp.close();
		});
	});
}

module.exports = {
	write: write
};
