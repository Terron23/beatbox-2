var dotenv = require("dotenv");
dotenv.load();
const _ = require("lodash");
const passport = require("passport");
const keys = require("../config/keys");
const db = require('../models/queries');


module.exports = app => {
app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),

    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/auth/facebook", passport.authenticate("facebook"));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/v2/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/v2/current_user", (req, res) => {
    res.send(req.user);
  });


  
  app.get("/api/v2/studio-listing", db.getStudios);
  app.get("/api/v2/studio-type", db.getStudioType);
  app.get("/api/v2/single-studio-listing/:id", db.getSingleStudios);
  app.post("/api/v2/post-listing", db.postListing);
  app.put("/api/v2/post-images", db.putImages);
  app.put("/api/v2/post-details", db.putStudioDetails);
  app.put("/api/v2/put-studio-info", db.putStudioInfo);
  app.put("/api/v2/update-user", db.updateUser);

}