//server routes

//dependends
const express = require('express');
const router = express.Router(); //método de express que devuelve un obejeto para listar rutas
const db = require('../database')

//router index
router.get('/', (req, res) => {

  /*//==== test insert to base
  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'Good Movie');"

  db.query(sqlInsert, (err, result) => {

    console.log('This is the error: ' + err);
    console.log('This is the result: ' + result);
    res.send("It's working, now!")
  })*/

  res.send("It's server working, now!")
})

router.get('/api/get/', (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews order by idmovie DESC"

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })

})

router.post('/api/insert/', (req, res) => {
  //req data de body
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);"

  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    // console.log(result);
  })
})

router.delete('/api/delete/:movieName', (req, result) => {
  const movieName = req.params.movieName;
  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?"

  db.query(sqlDelete, movieName, (err, res) => {

    if (err) {
      console.log('this error' + err);
    }
  })

})

router.put('/api/update', (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;

  const sqlUpdate = 'UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?';

  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log('This is err ' + err);
  })

})

module.exports = router;