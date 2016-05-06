var events = require('events');

var eventemiter = new events.EventEmitter();
var conected = function connected() {
	console.log('koneksi sukses');
	eventemiter.emit('data_received');
}
eventemiter.on('connection', conected);

eventemiter.on('data_received', function(){
	console.log('data sukses di terima');
});
eventemiter.emit('connection');

console.log('selesai');