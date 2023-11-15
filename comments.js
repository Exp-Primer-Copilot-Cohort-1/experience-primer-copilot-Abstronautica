// Create web server and handle the request and response of the server

// Import the required modules
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET request to get all the comments
router.get('/', function(req, res, next) {
    Comment.find({}, function(err, comments) {
        if (err) {
            return res.send(err);
        }
        res.json(comments);
    });
});

// POST request to create a new comment
router.post('/', function(req, res, next) {
    var comment = new Comment(req.body);
    comment.save(function(err, comment) {
        if (err) {
            return res.send(err);
        }
        res.json(comment);
    });
});

// GET request to get a single comment
router.get('/:id', function(req, res, next) {
    Comment.findOne({ _id: req.params.id }, function(err, comment) {
        if (err) {
            return res.send(err);
        }
        res.json(comment);
    });
});

// PUT request to update a single comment
router.put('/:id', function(req, res, next) {
    Comment.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, comment) {
        if (err) {
            return res.send(err);
        }
        res.json(comment);
    });
});

// DELETE request to delete a single comment
router.delete('/:id', function(req, res, next) {
    Comment.remove({ _id: req.params.id }, function(err, comment) {
        if (err) {
            return res.send(err);
        }
        res.json(comment);
    });
});

// Export the router
module.exports = router;