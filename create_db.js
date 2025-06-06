const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("users.db");

// Creazione della tabella utenti se non esiste
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS  users (id_user INTEGER PRIMARY KEY, username TEXT, password TEXT, birthdate INT, email TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS stats (id_user INTEGER PRIMARY KEY, squadra TEXT, anno_di_nascita TEXT, percentuale_tiro_3_punti TEXT, percentuale_tiro_libero TEXT)")
    db.run("INSERT INTO users (id_user, username, password, birthdate, email) VALUES (1, 'MJ', '1234ABC', '01/01/2000', 'MICHAEL.JORDAN@gmail.com')");
    db.run("INSERT INTO stats (id_user, squadra, anno_di_nascita, percentuale_tiro_3_punti, percentuale_tiro_libero) VALUES(1, 'chicago_bulls','01/01/2000', '35','80%')")
   
   
});
