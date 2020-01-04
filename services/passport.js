const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const googleClientID = keys.googleClientID;
const googleClientSecret = keys.googleClientSecret;
const FACEBOOK_APP_ID = keys.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = keys.FACEBOOK_APP_SECRET;

const db = keys.postgresDB;
const host = keys.postgresHost;
const password = keys.postgresPassword;
const user = keys.postgresUser;
const uri = keys.postgresConnectionString;
const queries = require("../models/queries");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: password,
  port: 5432,
  connectionString: uri,
  ssl: true
});

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  pool.query(`SELECT * FROM users WHERE _id = ${id}`, (err, results) => {
    if (err) {
    }
    done(null, results.rows[0]);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    async (accessToken, refreshToken, profile, done) => {
      await queries.findInsertUserGoogle(profile, done);
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (username, password, done) => {
      console.log(username, password);
      const existingUser = await pool.query(
        `SELECT * FROM users WHERE email = '${username}' 
    and username='${username}' 
    and password='${password}'`,
        (err, results) => {
          if (err) {
            return done(err);
          } else if (results.rows[0]) {
            done(null, results.rows[0]);
          } else {
            pool.query(
              `Insert into users(social_id, email, contact_name, username, password) values($1, $2, $3, $4, $5)`,
              ["", username, username, username, password],
              (err, results) => {
                if (err) {
                  return done(err);
                } else {
                  pool.query(
                    `SELECT * FROM users WHERE email = '${username}' 
              and username='${username}' 
              and password='${password}'`,
                    (err, results) => {
                      if (err) {
                        return done(err);
                      }

                      done(null, results.rows[0]);
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      queries.findInsertUserGoogle
    })
);
