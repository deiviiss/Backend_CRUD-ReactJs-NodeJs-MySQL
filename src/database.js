//conexión con mysql

const mysql = require('mysql');
const { promisify } = require('util'); //modulo de node que permite usar promesas async await
const { database } = require('./keys'); //parámetros de la conexión

const db = mysql.createPool(database);//crea la conexión

//inicia la conexión con la base de datos
db.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('database connection was closed');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.log('database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.log('database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('database is connected')
  return;
})

//promisify pool querys, use async await
db.query = promisify(db.query);

module.exports = db;
