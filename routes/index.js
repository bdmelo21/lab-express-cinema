const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.models.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res)=>{
    Movie.find()
      .then((allTheMoviesFromDb)=>{
        console.log(allTheMoviesFromDb);
        res.render('movies', {movies: allTheMoviesFromDb});
      });
  });

router.get('/movies/:Movieid', (req,res)=>{
    let MovieId= req.params.Movieid;
    Movie.findById(MovieId)
      .then((theMovieFounnd)=>{
        res.render('movie-details', {movies: theMovieFounnd});
      });
  });


module.exports = router;
