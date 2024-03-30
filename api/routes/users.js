var express = require('express');
var userModel = require('../models/user');
var router = express.Router();
const bcrypt = require('bcrypt');

// Middleware function to check if email already exists
function checkEmail(req, res, next) {
    var email = req.body.Email;
    userModel.findOne({ email: email })
        .exec()
        .then(data => {
            if (data) {
                return res.status(200).json({
                    msg: "Email Already Exists",
                    results: data
                });
            }
            next(); // Proceed to the next middleware or route handler
        })
        .catch(err => {
            next(err); // Pass error to the error handling middleware
        });
}

// Route to render index page
router.get('/', function (req, res, next) {
    res.render('index', { title: 'User Data Inserted' });
});

// Route to handle user registration
router.post('/register', checkEmail, function (req, res, next) {
    bcrypt.hash(req.body.Password, 10, function (err, hash) {
        if (err) {
            return res.status(400).json({
                msg: "Something Wrong, Try Later!",
                results: err
            });
        } else {
            var userDetails = new userModel({
                name: req.body.Name,
                email: req.body.Email,
                password: hash,
                role: 'Author'
            });

            userDetails.save()
                .then(resResult => {
                    res.status(201).json({
                        msg: "User Created Successfully",
                        results: resResult
                    });
                })
                .catch(err => {
                    next(err); // Pass error to the error handling middleware
                });
        }
    });
});

// Route to handle user login
router.post("/login", function (req, res, next) {
    var email = req.body.Email;
    userModel.find({ email: email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(200).json({
                    msg: "Auth Failed",
                    UserData: '',
                    status: 'error'
                });
            } else {
                bcrypt.compare(req.body.Password, user[0].password, function (err, result) {
                    if (err) {
                        return res.status(500).json({
                            msg: "Auth Failed",
                            UserData: '',
                            status: 'error'
                        });
                    }
                    if (result) {
                        return res.status(200).json({
                            msg: "User Login Successfully",
                            UserData: user,
                            status: 'success'
                        });
                    } else {
                        return res.status(200).json({
                            msg: "Auth Failed",
                            UserData: '',
                            status: 'error'
                        });
                    }
                });
            }
        })
        .catch(err => {
            next(err); // Pass error to the error handling middleware
        });
});

module.exports = router;
