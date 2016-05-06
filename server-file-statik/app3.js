//app.js
var mysql = require('mysql');

/**
* Setting opsi dari connection, 
* lihat https://github.com/felixge/node-mysql/
*/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coba_nodejs'
});

//Membuka koneksi ke database MySQL
connection.connect(function(err){
    if(err) {
        console.log(err);
    } else {
        console.log('Koneksi dengan id '+ connection.threadId);
    }
});

// Query bisa dilakukan di sini
var isi = {
    id: 2,
    nama: 'nama'
}

var insert_sql = 'INSERT INTO coba SET ?';

connection.query(insert_sql, isi, function(err, result){
    err ? console.log(err): console.log(result);
})
var ided   = '1';
var tampil = 'select * from coba where id = 1';

connection.query(tampil, function(err, result){
    err ? console.log(err): console.log(result);
})

//agar tidak sql injection
var userId = 2;
//var columns = ['username', 'email'];
var query = connection.query('SELECT * FROM ?? WHERE id = ?', ['nama', 'coba', userId], function(err, results) {
  err ? console.log(err): console.log(result);
});
//Menutup koneksi
//connection.destroye(); sama dengan end tapi tidak ada callback
connection.end(function(err){
   if(err) {
       console.log(err);
    } else {
       console.log('koneksi ditutup!');
   }
});