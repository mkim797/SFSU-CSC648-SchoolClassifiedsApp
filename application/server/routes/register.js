/*
 * This is the register route.
 * Data from the register form is sent here to be validated and inputed into the user table in the database
 */

const express = require("express");
const router = express.Router();
const Validator = require('../validator/loginValidation');
var UserError = require("../error/userError");
const UserModel = require("../models/register");
const errorPrinter = require("../error/debugprinters");
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Register Route Test
 */
router.get("/", (req, res) => {
    res.send("Successful Register route response");
});

/**
 * Registration Route
 */
router.post('/register', (req, res, next) => {
    console.log("inside register route");
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.password2;
    console.log(req.body);
    
    // Validator for form
    Validator.usernameValid(username)
        .then((usernameOK) => {
            console.log("is usernameok?: " + username);
            if (usernameOK) {
                return Validator.emailValid(email);
            } else {
                throw new UserError("Enter a valid username", "/register", 200);
            }
        }).then((emailOK) => {
            console.log("is emailok?: " + emailOK);
            if (emailOK) {
                return Validator.passwordValid(password);
            } else {
                throw new UserError("Enter a valid SFSU email", "/register", 200);
            }
        }).then((passwordOK) => {
            console.log("is passwordok?: " + passwordOK);
            if (passwordOK) {
                return Validator.cpasswordValid(password, confirmPassword);
            } else {
                throw new UserError("Enter a valid password", "/register", 200);
            }
        }).then((bothPasswordsOK) => {
            console.log("is both passwords ok? " + bothPasswordsOK);
            if (bothPasswordsOK) {
                return UserModel.usernameExist(username);
            } else {
                throw new UserError("Your passwords don't match", "/register", 200);
            }
        }).then((usernameExists) => {
            console.log("does theusername exist? " + usernameExists);
            if (usernameExists) {
                throw new UserError("This username already exists", "/register", 200);
            } else {
                return UserModel.emailExist(email);
            }
        }).then((emailExists) => {
            console.log("does the email exist? " + emailExists);
            if (emailExists) {
                throw new UserError("This email already exists", "/register", 200);
            } else {
                console.log("what is password? " + password);
                return UserModel.createAccount(firstname, lastname, username, password, email);
            }
        }).then((userId) => {
            console.log("what is the userID? " + userId);
            if (userId > 0) {
                console.log('User successfuly created!');
                res.redirect('/login');
            } else {
                req.flash('success', 'User account has been made');
                throw new UserError("User could not be created", "/register", 200);
            }
        })
        .catch((err) => {
            errorPrinter.errorPrint("user could not be made", err);
            if (err instanceof UserError) {
                errorPrinter.errorPrint(err.getMessage());
                req.flash('error', err.getMessage());//get error message from object
                res.status(err.getStatus());
                res.redirect(err.getRedirectURL());
            } else {
                next(err);
            }
        });
});

module.exports = router;