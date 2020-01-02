var dotenv = require("dotenv");
dotenv.load();
const _ = require("lodash");
const db = require('../models/queries');


module.exports = app => {


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
  app.get("/api/v2/studios-booked", db.getStudiosBooked);
  app.post("/api/v2/post-listing", db.postListing);
  app.post("/api/v2/payment", db.postPayment);
  app.put("/api/v2/post-images", db.putImages);
  app.put("/api/v2/post-details", db.putStudioDetails);
  app.put("/api/v2/put-studio-info", db.putStudioInfo);
  app.put("/api/v2/update-user", db.updateUser);

}