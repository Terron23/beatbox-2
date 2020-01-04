const mongoose = require("mongoose");
const passport = require("passport");
const stripe = require("stripe")("sk_test_V6wlaNvsxc7i7lpa0BfseByb");
const keys = require("../config/keys");
const where = require("node-where");
require("../models/User.js");
require("../models/StudioBooked.js");

const StudioBooked = mongoose.model("studioBooked");
const Users = mongoose.model("users");
// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:

module.exports = app => {

   function LoginRoutes (param, route){
    return param !== route ? param : "/"
  }

  app.get(`/auth/google`, (req, res, next) => {
    const authenticator = passport.authenticate("google", {scope: ["profile", "email"]})
    req.app.locals.urlGoogle = LoginRoutes(req.query.path, '/sign-up');;
    console.log(req.app.locals.urlGoogle)
    authenticator(req, res, next)
})

 app.get(
    "/auth/google/callback",
    passport.authenticate("google", {failureRedirect: '/sign-up'}),
   
    (req, res) => {
      console.log(req.app.locals.urlGoogle)
      res.redirect(req.app.locals.urlGoogle);
    }
  );

  app.get("/auth/facebook", (req, res, next) => {
    const authenticator = passport.authenticate("facebook", {scope: ["profile", "email"]})
    req.app.locals.urlFB = LoginRoutes(req.query.path, '/sign-up');
    authenticator(req, res, next)
  });

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect(req.app.locals.urlFB);
    }
  );

  app.post(`/auth/local`, passport.authenticate("local", {
  failureRedirect: "/", 
  successRedirect:"/"}
  ))
  

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  
};
