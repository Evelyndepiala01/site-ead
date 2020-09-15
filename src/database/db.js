const Database = require('sqlite-async')

function execute(db) {
    return db.exec(`
   CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      whatsapp TEXT,
      bio TEXT
      );

      CREATE TABLE IF NOT EXISTS classes (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        subject INTERGER,
        cost TEXT,
        proffy_id INTERGER
      );

      CREATE TABLE IF NOT EXISTS class_schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTERGER,
        weekday INTERGER,
        time_from INTERGER,
        time_to INTERGER
    );
   `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)