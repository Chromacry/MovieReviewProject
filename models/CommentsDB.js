"use strict";

var db = require('../db-connection');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from movie_review.comment";
        db.query(sql, callback);
    }
}

module.exports = CommentsDB;