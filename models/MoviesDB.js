"use strict";

var db = require('../db-connection');
class MoviesDB {
    getAllMovies(callback){
        var sql = "SELECT title from movie_review.movie";
        db.query(sql, callback);
    }
}

module.exports = MoviesDB;