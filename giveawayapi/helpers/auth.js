
var db = require('../models');
var jwt = require('jsonwebtoken');

exports.signup = function (req, res, next) {
    db.User.create(req.body).then(user => {
        var token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
        res.status(200).json({
            userId: user.id,
            username: user.username,
            token
        });
    }).catch(err => {
        res.status(400).json(err);
    });
};

exports.signin = function (req, res, next) {
    db.User.findOne({ email: req.body.email }).then(user => {
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch){
                var token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
                res.status(200).json({
                    userId: user.id,
                    username: user.username,
                    token
                });
            }else{  
                res.status(400).json({message: "Invalid Email or Password"})
            }
        })
    }).catch(err => {
        res.status(400).json({message: "Invalid Email or Password"});
    });
};


module.exports = exports;