/**
 * Akses SQLite 3
 */
var sqlite = require('sqlite3').verbose();
var file = 'film.db';
var db = new sqlite.Database(file);
var fs = require('fs');

// Sample Data
var film = {
    judul: "Keramat",
    release: "2009",
    imdb: "http://www.imdb.com/title/tt1495818/",
    deskripsi: "Film horror paling horror!"
}

var filmUpdate = {
    id: 1,
    deskripsi: "Best Indonesian Horror Movie."
}

// SQL Statement
var CREATE_TABLE = "CREATE TABLE IF NOT EXISTS fdb ( id INTEGER PRIMARY KEY AUTOINCREMENT, judul TEXT NOT NULL, release TEXT NOT NULL, imdb TEXT, deskripsi TEXT )";
var INSERT_DATA = "INSERT INTO fdb (judul, release, imdb, deskripsi) VALUES (?, ?, ?, ?)";
var SELECT_DATA = "SELECT * FROM fdb";
var UPDATE_DATA = "UPDATE fdb SET deskripsi=$deskripsi WHERE id=$id";

// Run SQL one at a time
db.serialize(function() {
    // Create table
    db.run(CREATE_TABLE, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('CREATE TABLE');
        }
    });

    // Insert data with sample data
    db.run(INSERT_DATA, [film.judul, film.release, film.imdb, film.deskripsi], function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('INSERT DATA');
        }
    });

    // Query all data
    selectAllData();

    // Update data
    db.run(UPDATE_DATA, {$deskripsi: filmUpdate.deskripsi, $id: filmUpdate.id}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log('UDATE DATA');
        }
    });

    selectAllData();

    db.run('DELETE FROM fdb WHERE id=$id', {$id:1}, function(err){
        if(err) {
            console.log(err)
        } else {
            console.log("DELETE DATA");
        };

    })

});

function selectAllData() {
    db.each(SELECT_DATA, function(err, rows) {
        if (!err) {
            console.log(rows);
        }
    })
}