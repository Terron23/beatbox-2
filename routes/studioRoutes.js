var dotenv = require("dotenv");
dotenv.load();
const _ = require("lodash");
//const Path = require('path-parser');
const passport = require("passport");
const keys = require("../config/keys");
const db = keys.postgresDB;
const host = keys.postgresHost;
const password = keys.postgresPassword;
const user = keys.postgresUser;
const uri = keys.postgresConnectionString;

const Pool = require('pg').Pool
const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: password,
  port: 5432,
  connectionString: uri,
  ssl: true,

})

module.exports = app => {
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY _id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  app.get('/api/v2/users', getUsers);


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

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/api/update_user", (req, res) => {
    let { username: name, email, instagram, twitter, facebook } = req.body;
    console.log(req.body);
    Users.update(
      { _id: req.user.id },
      {
        email,
        name,
        social: [instagram, twitter, facebook]
      },
      { upsert: true },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("update succeded");
        }
      }
    );
  });

}